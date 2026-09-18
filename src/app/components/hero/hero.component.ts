import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface Stat {
  count: number;
  label: string;
  display: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('statsStrip') statsStripRef?: ElementRef<HTMLElement>;

  stats: Stat[] = [
    { count: 500, label: 'Students trained', display: '0' },
    { count: 60, label: 'Projects delivered', display: '0' },
    { count: 40, label: 'Hiring partners', display: '0' },
    { count: 35, label: 'Happy clients', display: '0' }
  ];

  private animationFrameId?: number;
  private resizeListener = () => this.resizeCanvas();
  private statsObserver?: IntersectionObserver;
  private statsAnimated = false;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.setupParticles();
    this.setupStatsCounter();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.resizeListener);
    this.statsObserver?.disconnect();
  }

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  // ---- Particle network background ----
  private w = 0;
  private h = 0;
  private particles: { x: number; y: number; vx: number; vy: number }[] = [];
  private mouse = { x: null as number | null, y: null as number | null, radius: 130 };

  private setupParticles(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const hero = canvas.parentElement;
    if (!hero) return;

    this.resizeCanvas();
    window.addEventListener('resize', this.resizeListener);

    hero.addEventListener('mousemove', (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
    });
    hero.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    const tick = () => {
      ctx.clearRect(0, 0, this.w, this.h);
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > this.w) p.vx *= -1;
        if (p.y < 0 || p.y > this.h) p.vy *= -1;
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.mouse.radius) {
            p.x += (dx / dist) * 0.6;
            p.y += (dy / dist) * 0.6;
          }
        }
      });
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const a = this.particles[i];
          const b = this.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = 'rgba(27,34,80,' + 0.12 * (1 - dist / 110) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(255,176,32,0.55)';
        ctx.beginPath();
        ctx.arc(this.particles[i].x, this.particles[i].y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      this.animationFrameId = requestAnimationFrame(tick);
    };
    this.animationFrameId = requestAnimationFrame(tick);
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    const hero = canvas?.parentElement;
    if (!canvas || !hero) return;
    this.w = canvas.width = hero.offsetWidth;
    this.h = canvas.height = hero.offsetHeight;
    const count = Math.min(60, Math.floor((this.w * this.h) / 22000));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    }));
  }

  // ---- Animated stat counters, triggered once in view ----
  private setupStatsCounter(): void {
    const el = this.statsStripRef?.nativeElement;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.statsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            if (reduced) {
              this.stats.forEach(s => (s.display = s.count + '+'));
            } else {
              this.stats.forEach(s => this.animateStat(s));
            }
            this.statsObserver?.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.statsObserver.observe(el);
  }

  private animateStat(stat: Stat): void {
    let cur = 0;
    const step = Math.max(1, Math.round(stat.count / 60));
    const tick = () => {
      cur += step;
      if (cur >= stat.count) {
        stat.display = stat.count + '+';
      } else {
        stat.display = String(cur);
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }
}
