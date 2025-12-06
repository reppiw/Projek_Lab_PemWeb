import React, { useEffect, useRef, useState } from 'react'

export default function Game() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [highscores, setHighscores] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
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

    sprites.background.src = '/game/background.png'
    sprites.player.src = '/game/player.png'
    sprites.enemy.src = '/game/enemy.png'
    sprites.bullet.src = '/game/bullet.png'
    sprites.floor.src = '/game/floor.png'

    const player = { x: W/2, y: groundY - 105, w: 100, h: 110, facing:1, hp:100, maxHp:100, inv:0 }
    const bullets = []
    const enemies = []

    function shoot(dir){ bullets.push({ x: player.x + dir * (player.w/2 + 6), y: player.y + player.h*0.45, vx: dir * 6.5, r: 10 }) }
    function bulletHitsEnemy(b,e){ const cx = Math.max(e.x, Math.min(b.x, e.x + e.w)); const cy = Math.max(e.y, Math.min(b.y, e.y + e.h)); return (b.x-cx)**2 + (b.y-cy)**2 <= b.r*b.r }
    function spawnEnemy(){ const fromLeft = Math.random() < 0.5; const speed = 1.2 + Math.random()*1.2; const w=60,h=65; enemies.push({ x: fromLeft ? -w-10 : W+10, y: groundY-h+5, w, h, vx: fromLeft ? speed : -speed }) }

    const drawPlayer = () => { ctx.save(); ctx.translate(player.x, player.y); ctx.scale(player.facing,1); ctx.drawImage(sprites.player, -player.w/2, 0, player.w, player.h); ctx.restore() }
    function drawHealthBar(){ const barWidth = 120, barHeight = 14, x = player.x - barWidth/2, y = player.y - 20, pct = player.hp / player.maxHp; ctx.fillStyle='rgba(0,0,0,0.6)'; ctx.fillRect(x,y,barWidth,barHeight); ctx.fillStyle='#802020'; ctx.fillRect(x,y,barWidth,barHeight); ctx.fillStyle='#20ff20'; ctx.fillRect(x,y,barWidth * pct, barHeight); ctx.strokeStyle='#000'; ctx.strokeRect(x,y,barWidth,barHeight) }
    const drawBullet = b => ctx.drawImage(sprites.bullet, b.x-b.r, b.y-b.r, b.r*2, b.r*2)
    const drawEnemy = e => { ctx.save(); const dir = e.vx > 0 ? -1 : 1; ctx.translate(e.x + e.w/2, e.y + e.h/2); ctx.scale(dir,1); ctx.drawImage(sprites.enemy, -e.w/2, -e.h/2, e.w, e.h); ctx.restore() }
    const drawGround = () => ctx.drawImage(sprites.floor, 0, groundY, W, H-groundY)

    let last = performance.now(), spawnTimer = 0; const spawnInterval = 1000
    function loop(now){ const dt = now - last; last = now; spawnTimer += dt; if (spawnTimer >= spawnInterval) spawnTimer = 0, spawnEnemy();
      for (let i = bullets.length-1; i >= 0; i--){ const b = bullets[i]; b.x += b.vx; if (b.x < -20 || b.x > W+20) { bullets.splice(i,1); continue } for (let j = enemies.length-1; j >=0; j--){ if (bulletHitsEnemy(b,enemies[j])){ enemies.splice(j,1); bullets.splice(i,1); setScore(s=>s+1); break } } }
      for (let i = enemies.length-1; i >= 0; i--){ const e = enemies[i]; e.x += e.vx; const stopL = player.x - 60, stopR = player.x + 20; if ((e.vx>0 && e.x > stopL) || (e.vx<0 && e.x < stopR)) e.vx *= 0.65; if (player.inv <=0){ const hit = e.x < player.x + player.w/2 && e.x + e.w > player.x - player.w/2 && e.y < player.y + player.h && e.y + e.h > player.y; if (hit){ player.hp -= 20; player.inv = 40; if (player.hp <=0){ alert('You died! Final score: ' + score); location.reload() } } } if (e.x <= -200 || e.x >= W + 200) enemies.splice(i,1) }
      if (player.inv > 0) player.inv--;
      ctx.drawImage(sprites.background, 0, 0, W, H); drawGround(); drawPlayer(); enemies.forEach(drawEnemy); bullets.forEach(drawBullet); drawHealthBar(); requestAnimationFrame(loop)
    }

    const onKeyDown = e => { if (e.key === 'ArrowLeft' || e.key === 'a') player.facing = -1; if (e.key === 'ArrowRight' || e.key === 'd') player.facing = 1; if (e.code === 'Space') shoot(player.facing) }
    const onPointerDown = e => { const rect = canvas.getBoundingClientRect(); const cx = (e.clientX - rect.left) * (canvas.width / rect.width); const dir = cx < player.x ? -1 : 1; player.facing = dir; shoot(dir) }

    window.addEventListener('keydown', onKeyDown); canvas.addEventListener('pointerdown', onPointerDown)
    requestAnimationFrame(loop); spawnEnemy(); spawnEnemy()

    return () => { window.removeEventListener('keydown', onKeyDown); canvas.removeEventListener('pointerdown', onPointerDown) }
  }, [])

  useEffect(() => { loadHighscores() }, [])
  async function loadHighscores(){ try{ const res = await fetch('http://localhost:3000/api/highscores'); const list = await res.json(); setHighscores(list) } catch (err){ console.error(err); setHighscores([]) } }
  async function saveScore(){ if (score <=0){ alert('Score is zero — play first.'); return } const name = prompt('Enter your player name:', 'Player') || 'Player'; try{ const p = await fetch('http://localhost:3000/api/player', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name })}); const player = await p.json(); await fetch('http://localhost:3000/api/highscore', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ player_id: player.id, score })}); alert('Score saved!'); loadHighscores() } catch (err){ console.error(err); alert('Failed to save score.') } }
  async function resetHighscores(){ if (!confirm('Reset all highscores?')) return; await fetch('http://localhost:3000/api/highscores/reset', { method:'POST' }); loadHighscores() }

  return (
    <div className="wrap">
      <div className="hud">
        <div>
          <div className="score">Score: <span>{score}</span></div>
          <div className="instructions">Controls: A / D or Arrow Keys to turn, Space / Click to shoot</div>
        </div>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
            <button onClick={saveScore}>Save Score</button>
            <button id="resetHS" onClick={resetHighscores}>Reset Highscores</button>
          </div>
          <div id="highscores">
            <strong>Highscores</strong>
            <div id="hsList">{highscores === null ? '(loading...)' : (highscores.length === 0 ? '(no highscores yet)' : (<ol>{highscores.map((r,i)=>(<li key={i}>{r.name} — {r.score}</li>))}</ol>))}</div>
          </div>
        </div>
      </div>
      <canvas id="game" ref={canvasRef} width={1100} height={660}></canvas>
    </div>
  )
}
