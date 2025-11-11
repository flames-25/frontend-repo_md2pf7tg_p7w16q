import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, Minus } from 'lucide-react'

function Availability({ available, label }) {
  const Icon = available ? Check : Minus
  return (
    <div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-md border ${available ? 'border-emerald-500/30 bg-emerald-400/10 text-emerald-300' : 'border-white/10 bg-white/5 text-slate-400'}`} aria-label={`${label}: ${available ? 'Included' : 'Not included'}`}>
      <Icon className="h-5 w-5" />
    </div>
  )
}

const plans = ['Bronze', 'Silver', 'Gold']

const data = [
  {
    category: 'Device Monitoring & Control',
    items: [
      { name: 'Monitor Apps', Bronze: true, Silver: true, Gold: true },
      { name: 'See Wallpapers', Bronze: true, Silver: true, Gold: true },
      { name: 'Monitor Volume', Bronze: false, Silver: true, Gold: true },
      { name: 'Monitor Brightness', Bronze: false, Silver: true, Gold: true },
      { name: 'Control Apps', Bronze: false, Silver: true, Gold: true },
      { name: 'Control Volume', Bronze: false, Silver: true, Gold: true },
      { name: 'Control Brightness', Bronze: false, Silver: true, Gold: true },
      { name: 'Set Wallpaper', Bronze: false, Silver: true, Gold: true },
      { name: 'Lock Mobile', Bronze: false, Silver: true, Gold: true },
    ],
  },
  {
    category: 'Communication Monitoring',
    items: [
      { name: 'Read Call History', Bronze: true, Silver: true, Gold: true },
      { name: 'Create Calls', Bronze: true, Silver: true, Gold: true },
      { name: 'Read Contacts', Bronze: true, Silver: true, Gold: true },
      { name: 'Monitor Notifications', Bronze: false, Silver: false, Gold: true },
      { name: 'Read Messages', Bronze: false, Silver: false, Gold: true },
      { name: 'Send Messages', Bronze: false, Silver: false, Gold: true },
    ],
  },
  {
    category: 'File & Data Access',
    items: [
      { name: 'Image Gallery', Bronze: false, Silver: false, Gold: true },
      { name: 'Download Files', Bronze: false, Silver: false, Gold: true },
      { name: 'Download Images', Bronze: false, Silver: false, Gold: true },
      { name: 'Delete Files', Bronze: false, Silver: false, Gold: true },
      { name: 'Delete Images', Bronze: false, Silver: false, Gold: true },
    ],
  },
  {
    category: 'Live Monitoring',
    items: [
      { name: 'Remote Camera', Bronze: false, Silver: false, Gold: true },
      { name: 'One-Way Audio', Bronze: false, Silver: false, Gold: true },
      { name: 'Live Location', Bronze: false, Silver: false, Gold: true },
    ],
  },
  {
    category: 'Core Utilities',
    items: [
      { name: 'Device Information', Bronze: true, Silver: true, Gold: true },
      { name: 'Device Location', Bronze: true, Silver: true, Gold: true },
    ],
  },
]

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[50vh] min-h-[360px]">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.35),rgba(0,0,0,0.9))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300 backdrop-blur">
            Modern • Dark UI
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Price Comparison, Reimagined
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Scan features at a glance and choose the plan that fits you best.
          </p>
        </div>
      </div>
    </section>
  )
}

function PlanHeader() {
  return (
    <div className="grid grid-cols-4 items-end gap-4 px-4 sm:px-6 md:px-8">
      <div className="col-span-1" />
      {plans.map((p) => (
        <div key={p} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center shadow-sm backdrop-blur">
          <div className="text-sm uppercase tracking-wide text-slate-300">{p}</div>
        </div>
      ))}
    </div>
  )
}

function ComparisonTable() {
  return (
    <div className="mx-auto -mt-8 w-full max-w-6xl px-3 sm:px-6 md:px-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] shadow-2xl">
        <div className="border-b border-white/10 p-6 pb-8">
          <PlanHeader />
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            {data.map((group) => (
              <div key={group.category} className="">
                <div className="sticky top-0 z-10 border-y border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
                  <h3 className="text-sm font-medium tracking-wide text-slate-200">{group.category}</h3>
                </div>
                <ul className="divide-y divide-white/10">
                  {group.items.map((item) => (
                    <li key={item.name} className="grid grid-cols-4 items-center gap-4 px-4 py-3">
                      <div className="text-sm text-slate-300">{item.name}</div>
                      {plans.map((p) => (
                        <Availability key={p} available={Boolean(item[p])} label={`${item.name} in ${p}`} />
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl px-1 text-center text-xs text-slate-400">
        All features listed are subject to device compatibility and permissions.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <section className="relative z-10 -mt-12 pb-20">
        <ComparisonTable />
      </section>
    </div>
  )
}
