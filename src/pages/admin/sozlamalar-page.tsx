import { useState } from "react";
import {
  Building2,
  Clock,
  Globe,
  Bell,
  Shield,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Tab = "umumiy" | "bildirishnoma" | "xavfsizlik";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "umumiy", label: "Umumiy", icon: Building2 },
  { id: "bildirishnoma", label: "Bildirishnomalar", icon: Bell },
  { id: "xavfsizlik", label: "Xavfsizlik", icon: Shield },
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className={cn("relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors", checked ? "bg-blue-600" : "bg-slate-200")}
    >
      <span className={cn("pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg transition-transform", checked ? "translate-x-5" : "translate-x-0")} />
    </button>
  );
}

export function AdminSozlamalarPage() {
  const [activeTab, setActiveTab] = useState<Tab>("umumiy");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sozlamalar</h1>
        <p className="mt-1 text-sm text-slate-500">Tizim sozlamalarini boshqarish.</p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <nav className="flex lg:w-48 lg:flex-col gap-1">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-left",
              activeTab === tab.id ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
            )}>
              <tab.icon className="size-4" />{tab.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 space-y-6">
          {activeTab === "umumiy" && (
            <>
              <Card className="rounded-xl border-slate-200 shadow-xs">
                <CardContent className="p-6 space-y-5">
                  <h2 className="text-lg font-semibold text-slate-900">Markaz ma'lumotlari</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2"><Label>Markaz nomi</Label><Input defaultValue="O'quv Markaz" /></div>
                    <div className="space-y-2"><Label>Telefon</Label><Input defaultValue="+998 71 200 00 00" /></div>
                    <div className="space-y-2"><Label>Email</Label><Input defaultValue="info@oquvmarkaz.uz" /></div>
                    <div className="space-y-2"><Label>Veb-sayt</Label><Input defaultValue="oquvmarkaz.uz" /></div>
                    <div className="space-y-2 sm:col-span-2"><Label>Manzil</Label><Input defaultValue="Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 1" /></div>
                  </div>
                  <div className="flex justify-end"><Button>Saqlash</Button></div>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-slate-200 shadow-xs">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-slate-900">Mintaqa sozlamalari</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Til</Label>
                      <select className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"><option>O'zbek (lotin)</option><option>Русский</option><option>English</option></select>
                    </div>
                    <div className="space-y-2">
                      <Label>Vaqt mintaqasi</Label>
                      <select className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"><option>Toshkent (UTC+5)</option></select>
                    </div>
                    <div className="space-y-2">
                      <Label>Valyuta</Label>
                      <select className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"><option>UZS (so'm)</option><option>USD</option></select>
                    </div>
                    <div className="space-y-2">
                      <Label>Sana formati</Label>
                      <select className="flex h-9 w-full rounded-md border px-3 py-1 text-sm"><option>DD-MMM, YYYY</option><option>YYYY-MM-DD</option></select>
                    </div>
                  </div>
                  <div className="flex justify-end"><Button>Saqlash</Button></div>
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === "bildirishnoma" && (
            <Card className="rounded-xl border-slate-200 shadow-xs">
              <CardContent className="p-6 space-y-5">
                <h2 className="text-lg font-semibold text-slate-900">Bildirishnoma kanallari</h2>
                {[
                  { label: "Email bildirishnomalar", desc: "Muhim hodisalar haqida email orqali xabar", checked: emailNotif, onChange: setEmailNotif },
                  { label: "SMS bildirishnomalar", desc: "To'lov eslatmalari va shoshilinch xabarlar", checked: smsNotif, onChange: setSmsNotif },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between border-b border-slate-100 py-4 last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{n.label}</p>
                      <p className="text-xs text-slate-500">{n.desc}</p>
                    </div>
                    <Toggle checked={n.checked} onChange={n.onChange} />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {activeTab === "xavfsizlik" && (
            <Card className="rounded-xl border-slate-200 shadow-xs">
              <CardContent className="p-6 space-y-5">
                <h2 className="text-lg font-semibold text-slate-900">Xavfsizlik sozlamalari</h2>
                <div className="flex items-center justify-between border-b border-slate-100 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Ikki bosqichli tasdiqlash</p>
                    <p className="text-xs text-slate-500">Login qilganda SMS tasdiqlash</p>
                  </div>
                  <Toggle checked={twoFactor} onChange={setTwoFactor} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900">Admin parolini o'zgartirish</h3>
                  <div className="space-y-2"><Label>Joriy parol</Label><Input type="password" placeholder="••••••••" /></div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2"><Label>Yangi parol</Label><Input type="password" placeholder="Kamida 8 ta belgi" /></div>
                    <div className="space-y-2"><Label>Tasdiqlash</Label><Input type="password" placeholder="Qaytadan kiriting" /></div>
                  </div>
                  <div className="flex justify-end"><Button>Parolni yangilash</Button></div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
