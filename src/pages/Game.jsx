import React, { useEffect, useRef } from 'react'

export default function Game(){
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const groundY = Math.round(H * 0.78)

    const sprites = {
        background: new Image(),
        player: new Image(),
        enemy: new Image(),
        bullet: new Image(),
        floor: new Image()
    }

    sprites.background.src = '/assets/game/background.png'
    sprites.player.src = '/assets/game/player.png'
    sprites.enemy.src = '/assets/game/enemy.png'
    sprites.bullet.src = '/assets/game/bullet.png'
    sprites.floor.src = '/assets/game/floor.png'

    const scoreEl = document.getElementById('score')
    const saveBtn = document.getElementById('saveScore')
    const resetBtn = document.getElementById('resetHS')
    const playBtn = document.getElementById('playBtn')
    const hsListEl = document.getElementById('hsList')
    const achListEl = document.getElementById('achList')
    const playerInput = document.getElementById('playerName')
    const setPlayerBtn = document.getElementById('setPlayer')
    const restartBtn = document.getElementById('restartBtn')

    let player = { x: W/2, y: groundY - 105, w:100, h:110, facing:1, hp:100, maxHp:100, inv:0 }
    let bullets = []
    let enemies = []
    let score = 0
    let running = false
    let rafId = null
    let killStreak = 0
    const thresholds = [10,20,100]
    const achievementsUnlocked = new Set()
    let playerId = null
    let playerName = null

    function showAchievement(name){
        if (!achListEl) return
        // replace '(none)' if first achievement
        if (achListEl.textContent.trim() === '(none)') achListEl.textContent = ''
        const item = document.createElement('div')
        item.className = 'text-sm text-green-700 mb-1'
        item.textContent = `Unlocked: ${name}`
        achListEl.appendChild(item)
    }

    async function loadHighscores(){
        try{
            const res = await fetch('http://localhost:3000/api/highscores')
            return await res.json()
        }catch(e){ return [] }
    }

    async function renderHighscores(providedList){
      try{
        const list = providedList || await loadHighscores()
        if (!hsListEl) return
        hsListEl.innerHTML = ''
        if (!list || list.length === 0){ hsListEl.innerHTML = '<div className="text-gray-600">(no highscores yet)</div>'; return }
        const ol = document.createElement('ol')
        ol.className = 'text-gray-700'
        list.forEach((r, idx) => { 
          const li = document.createElement('li')
          li.className = 'mb-2'
          // support backend keys: name or player_name
          const name = r.name || r.player_name || 'Unknown'
          li.textContent = `${idx + 1}. ${name} — ${r.score} points`
          ol.appendChild(li) 
        })
        hsListEl.appendChild(ol)
      }catch(e){ if (hsListEl) hsListEl.innerHTML = '<div className="text-red-600">(failed to load)</div>'; }
    }

    async function fetchAchievements(name){
        try{
            const res = await fetch(`http://localhost:3000/api/achievements/${encodeURIComponent(name)}`)
            const list = await res.json()
            if (!achListEl) return
            achListEl.innerHTML = ''
            if (!list || list.length === 0){ achListEl.innerHTML = '<div class="text-gray-600">(none)</div>'; return }
            list.forEach(a => {
                const d = document.createElement('div')
                d.className = 'text-sm text-green-700 mb-2 font-medium'
                d.textContent = `✓ ${a.title}`
                achListEl.appendChild(d)
            })
        }catch(e){ if (achListEl) achListEl.innerHTML = '<div class="text-red-600">(failed to load)</div>'; }
    }

    renderHighscores().catch(e => console.error('Failed to load highscores:', e))
    if (playerInput && playerInput.value) {
        playerName = playerInput.value
        fetchAchievements(playerName)
    }

    if (saveBtn) saveBtn.onclick = async () => {
        if (!playerId) { alert('Set your player first.'); return }
        if (score <= 0) { alert('Score is zero — play first.'); return }
        try {
          const resp = await fetch('http://localhost:3000/api/highscore', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ player_id: playerId, score }) })
          const json = await resp.json()
          if (!resp.ok) throw new Error(json.error || 'Save failed')
          alert('Score saved!')
          if (json.highscores) {
            await renderHighscores(json.highscores)
          } else {
            await renderHighscores()
          }
          await fetchAchievements(playerName)
        } catch(err){ console.error(err); alert('Failed to save score.') }
    }

    if (resetBtn) resetBtn.onclick = async () => {
        if (!confirm('Reset all highscores?')) return
        await fetch('http://localhost:3000/api/highscores/reset', { method: 'POST' })
        renderHighscores()
    }

    if (setPlayerBtn) setPlayerBtn.onclick = async () => {
        const name = playerInput && playerInput.value ? playerInput.value.trim() : ''
        if (!name) { alert('Enter a player name'); return }
        try{
            const res = await fetch('http://localhost:3000/api/player', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ name }) })
            const p = await res.json()
            playerId = p.id
            playerName = p.name
            if (playerInput) playerInput.disabled = true
            if (setPlayerBtn) setPlayerBtn.disabled = true
            if (playBtn) playBtn.textContent = 'Play'
            const playerLabel = document.getElementById('playerLabel')
            if (playerLabel) playerLabel.textContent = `✓ Player: ${playerName}`
            fetchAchievements(playerName)
        }catch(e){ console.error(e); alert('Failed to set player') }
    }

    if (restartBtn) {
      restartBtn.style.display = 'none'
      restartBtn.onclick = () => {

        score = 0
        if (scoreEl) scoreEl.textContent = score
        bullets = []
        enemies = []
        player.hp = player.maxHp
        killStreak = 0
        running = true
        if (playBtn) playBtn.textContent = 'Pause'
        restartBtn.style.display = 'none'

        spawnEnemy(); spawnEnemy()
      }
    }

    let keyLeft = false, keyRight = false
    window.onkeydown = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') keyLeft = true, player.facing = -1
        if (e.key === 'ArrowRight' || e.key === 'd') keyRight = true, player.facing = 1
        if (e.code === 'Space') shoot(player.facing)
    }

    window.onkeyup = (e) => { if (e.key === 'ArrowLeft' || e.key === 'a') keyLeft = false; if (e.key === 'ArrowRight' || e.key === 'd') keyRight = false }

    const onPointerDown = e => {
        const rect = canvas.getBoundingClientRect()
        const cx = (e.clientX - rect.left) * (canvas.width / rect.width)
        const dir = cx < player.x ? -1 : 1
        player.facing = dir
        shoot(dir)
    }
    canvas.addEventListener('pointerdown', onPointerDown)

    function shoot(dir){
      if (!running) return
      bullets.push({x: player.x + dir * (player.w/2 + 6), y: player.y + player.h*0.45, vx: dir * 6.5, r: 10})
    }
    
    function bulletHitsEnemy(b,e){
        const cx = Math.max(e.x, Math.min(b.x, e.x+e.w));
        const cy = Math.max(e.y, Math.min(b.y, e.y+e.h));
        return (b.x-cx)**2 + (b.y-cy)**2 <= b.r*b.r
    }

    function spawnEnemy(){
        const fromLeft = Math.random() < 0.5;
        const speed = 1.2 + Math.random()*1.2;
        const w=60,h=65; enemies.push({
            x: fromLeft ? -w-10 : W+10, y: groundY-h+5, w,h, vx: fromLeft ? speed : -speed
        })
    }

    const drawPlayer = () => {
        ctx.save(); ctx.translate(player.x, player.y);
        ctx.scale(player.facing,1);
        ctx.drawImage(sprites.player, -player.w/2, 0, player.w, player.h);
        ctx.restore()
    }

    function drawHealthBar(){
        const barWidth=120,barHeight=14,x=player.x-barWidth/2,y=player.y-20,pct=player.hp/player.maxHp;
        ctx.fillStyle='rgba(0,0,0,0.6)';
        ctx.fillRect(x,y,barWidth,barHeight); 
        ctx.fillStyle='#802020';
        ctx.fillRect(x,y,barWidth,barHeight);
        ctx.fillStyle='#20ff20';
        ctx.fillRect(x,y,barWidth*pct,barHeight);
        ctx.strokeStyle='#000';
        ctx.strokeRect(x,y,barWidth,barHeight);
    }
    
    const drawBullet = b => ctx.drawImage(sprites.bullet, b.x-b.r, b.y-b.r, b.r*2, b.r*2)
    const drawEnemy = e => { ctx.save(); const dir = e.vx > 0 ? -1 : 1; ctx.translate(e.x+e.w/2, e.y+e.h/2); ctx.scale(dir,1); ctx.drawImage(sprites.enemy, -e.w/2, -e.h/2, e.w, e.h); ctx.restore() }
    const drawGround = () => ctx.drawImage(sprites.floor, 0, groundY, W, H-groundY)

    let last = performance.now(), spawnTimer = 0; const spawnInterval = 1000
    function loop(now){
        const dt = now - last;
        last = now;
        if (running) {
            spawnTimer += dt;
            if (spawnTimer >= spawnInterval) spawnTimer = 0, spawnEnemy();

            bullets = bullets.filter(b => {
                b.x += b.vx;
                if (b.x < -20 || b.x > W+20) return false;
                for (let i = enemies.length-1; i >= 0; i--) {
                if (bulletHitsEnemy(b, enemies[i])) {
                    enemies.splice(i,1);
                    score++;
                    killStreak++;
                    
                // check achievements
                thresholds.forEach(t => {
                    if (killStreak >= t && !achievementsUnlocked.has(t)){
                    achievementsUnlocked.add(t)
                    showAchievement(`${t} Kills in a Row`)
                    if (playerName) {
                        fetch('http://localhost:3000/achievements/unlock', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ playerName, achievementTitle: `${t} Kills in a Row` }) })
                            .then(()=> fetchAchievements(playerName))
                            .catch(e=>console.error('unlock failed', e))
                    }
                  }
                })
                if (scoreEl) scoreEl.textContent = score;
                return false
              }
            }
            return true
          });

          enemies = enemies.filter(e => {
            e.x += e.vx;
            const stopL = player.x - 60; const stopR = player.x + 20;
            if ((e.vx > 0 && e.x > stopL) || (e.vx < 0 && e.x < stopR)) {
                e.vx *= 0.65
            }
            if (player.inv <= 0) {
                const hit = e.x < player.x + player.w/2 && e.x + e.w > player.x - player.w/2 && e.y < player.y + player.h && e.y + e.h > player.y;
                if (hit) {
                    player.hp -= 20; player.inv = 40;
                    killStreak = 0
                    if (player.hp <= 0) {
                    running = false
                    if (playBtn) playBtn.textContent = 'Play'
                    if (restartBtn) restartBtn.style.display = 'block' // Show Restart button when player dies
                    alert('You died! Final score: ' + score + '. Click Restart to play again.')
                }
              }
            }
            return e.x > -200 && e.x < W + 200
          });

          if (player.inv > 0) player.inv--;

          ctx.drawImage(sprites.background, 0, 0, W, H);
          drawGround(); drawPlayer();
          enemies.forEach(drawEnemy);
          bullets.forEach(drawBullet);
          drawHealthBar();
        }
        rafId = requestAnimationFrame(loop)
                }

    rafId = requestAnimationFrame(loop)

    // play button
    if (playBtn) {
      playBtn.textContent = 'Play'
      playBtn.onclick = () => {
        if (!playerId) { alert('Please register a player first by clicking "Set Player"'); return }
        if (!running) {
          if (score === 0 && enemies.length === 0) {
            bullets = []
            enemies = []
            player.hp = player.maxHp
            killStreak = 0

            spawnEnemy(); spawnEnemy()
          }

          last = performance.now()
          spawnTimer = 0
          running = true
          playBtn.textContent = 'Pause'
        } else {
          running = false
          playBtn.textContent = 'Play'
        }
      }
    }

    return () => {
      window.onkeydown = null
      window.onkeyup = null
      if (canvas) canvas.removeEventListener('pointerdown', onPointerDown)
      if (saveBtn) saveBtn.onclick = null
      if (resetBtn) resetBtn.onclick = null
      if (playBtn) playBtn.onclick = null
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="wrap p-4">
      <div className="hud w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        <div className="mb-4 md:mb-0">
          <div className="score">Score: <span id="score">0</span></div>
          <div className="instructions">Controls: A / D or Arrow Keys to turn, Space / Click to shoot</div>
          <div className="mt-3 flex items-center gap-2">
            <input id="playerName" className="border p-1 rounded" placeholder="Player name" />
            <button id="setPlayer" className="bg-primary-600 text-white px-3 py-1 rounded">Set Player</button>
            <div id="playerLabel" className="text-sm text-gray-600"></div>
          </div>
        </div>
        <div>
              <div className="flex gap-2 mb-2 items-center">
                <button id="playBtn" className="bg-primary-500 text-white px-3 py-1 rounded">Play</button>
                <button id="restartBtn" className="bg-yellow-600 text-white px-3 py-1 rounded">Restart</button>
                <button id="saveScore" className="bg-primary-600 text-white px-3 py-1 rounded">Save Score</button>
                <button id="resetHS" className="bg-red-700 text-white px-3 py-1 rounded">Reset Highscores</button>
              </div>
              <div className="flex gap-4">
                <div id="highscores" className="bg-white bg-opacity-90 p-3 rounded text-sm border border-gray-300 flex-1">
                  <strong className="text-gray-800">Highscores</strong>
                  <div id="hsList" className="mt-2 text-gray-700">(loading...)</div>
                </div>
                <div id="achievements" className="bg-white bg-opacity-90 p-3 rounded text-sm border border-gray-300 flex-1">
                  <strong className="text-gray-800">Achievements</strong>
                  <div id="achList" className="mt-2 text-gray-700">(none)</div>
                </div>
              </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px]">
        <canvas id="game" ref={canvasRef} width={1100} height={660} style={{background:'linear-gradient(#7ec0ff,#87ceeb 60%)', border:'4px solid #333', borderRadius:6, display:'block', maxWidth:'100%', height:'auto'}}></canvas>
      </div>
    </div>
  )
}
