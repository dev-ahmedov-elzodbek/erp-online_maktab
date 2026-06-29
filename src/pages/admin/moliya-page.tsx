import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/data";

const months = ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"];

const revenueExpense = months.map((m, i) => ({
  month: m,
  daromad: [32, 38, 42, 48, 56, 62, 72, 68, 78, 85, 92, 98][i] * 1_000_000,
  xarajat: [18, 22, 20, 25, 28, 30, 35, 32, 38, 40, 42, 45][i] * 1_000_000,
}));

const expenseCategories = [
  { name: "Maosh", amount: 180_000_000, percent: 42, color: "bg-blue-500" },
  { name: "Ijara", amount: 72_000_000, percent: 17, color: "bg-emerald-500" },
  { name: "Marketing", amount: 48_000_000, percent: 11, color: "bg-amber-500" },
  { name: "Kommunal", amount: 36_000_000, percent: 8, color: "bg-violet-500" },
  { name: "Jihozlar", amount: 30_000_000, percent: 7, color: "bg-orange-500" },
  { name: "Boshqa", amount: 64_000_000, percent: 15, color: "bg-slate-400" },
];

const totalRevenue = revenueExpense.reduce((s, r) => s + r.daromad, 0);
const totalExpense = revenueExpense.reduce((s, r) => s + r.xarajat, 0);
const profit = totalRevenue - totalExpense;
const margin = Math.round((profit / totalRevenue) * 100);

const kpis = [
  { label: "Jami daromad", value: formatPrice(totalRevenue), trend: "+18.2%", up: true, icon: DollarSign, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { label: "Jami xarajat", value: formatPrice(totalExpense), trend: "+12.5%", up: false, icon: TrendingDown, color: "bg-red-50 text-red-600", border: "border-red-200" },
  { label: "Sof foyda", value: formatPrice(profit), trend: "+22.1%", up: true, icon: TrendingUp, color: "bg-blue-50 text-blue-600", border: "border-blue-200" },
  { label: "Foyda margini", value: `${margin}%`, trend: "+3.4%", up: true, icon: Wallet, color: "bg-violet-50 text-violet-600", border: "border-violet-200" },
];

export function MoliyaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Moliya</h1>
        <p className="mt-1 text-sm text-slate-500">Daromad, xarajat va foyda ko'rsatkichlari.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className={`rounded-xl border bg-white p-5 shadow-xs ${k.border}`}>
            <div className="flex items-start justify-between">
              <div className={`flex size-10 items-center justify-center rounded-lg ${k.color}`}><k.icon className="size-5" /></div>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${k.up ? "text-emerald-600" : "text-red-500"}`}>
                {k.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}{k.trend}
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{k.value}</p>
            <p className="mt-0.5 text-sm text-slate-500">{k.label}</p>
          </div>
        ))}
      </div>

      <Card className="rounded-xl border-slate-200 shadow-xs">
        <CardHeader><CardTitle className="text-base">Daromad va xarajat</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueExpense}>
              <defs>
                <linearGradient id="gDaromad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity={0.15} /><stop offset="100%" stopColor="#10b981" stopOpacity={0} /></linearGradient>
                <linearGradient id="gXarajat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" stopOpacity={0.15} /><stop offset="100%" stopColor="#ef4444" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} tickFormatter={(v) => `${v / 1_000_000}M`} />
              <Tooltip formatter={(v) => [`${(Number(v) / 1_000_000).toFixed(1)}M`, ""]} />
              <Area type="monotone" dataKey="daromad" stroke="#10b981" strokeWidth={2} fill="url(#gDaromad)" />
              <Area type="monotone" dataKey="xarajat" stroke="#ef4444" strokeWidth={2} fill="url(#gXarajat)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="rounded-xl border-slate-200 shadow-xs">
        <CardHeader><CardTitle className="text-base">Xarajat kategoriyalari</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {expenseCategories.map((c) => (
              <div key={c.name} className="flex items-center gap-4">
                <span className="w-24 text-sm text-slate-600">{c.name}</span>
                <div className="flex-1">
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.percent}%` }} />
                  </div>
                </div>
                <span className="w-28 text-right text-sm font-semibold text-slate-900">{formatPrice(c.amount)}</span>
                <span className="w-10 text-right text-xs text-slate-500">{c.percent}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
