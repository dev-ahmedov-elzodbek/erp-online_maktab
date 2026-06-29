import {
  FileText,
  Download,
  BarChart3,
  Users,
  CreditCard,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Report {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  lastGenerated: string;
  format: string;
}

const reports: Report[] = [
  { id: "1", title: "Talabalar hisoboti", description: "Barcha talabalar ro'yxati, davomat va baholar", icon: Users, color: "bg-blue-50 text-blue-600", lastGenerated: "20-noy, 2025", format: "PDF" },
  { id: "2", title: "Moliyaviy hisobot", description: "Oylik daromad, xarajat va foyda tahlili", icon: CreditCard, color: "bg-emerald-50 text-emerald-600", lastGenerated: "18-noy, 2025", format: "Excel" },
  { id: "3", title: "Davomat hisoboti", description: "Guruhlar bo'yicha davomat statistikasi", icon: Calendar, color: "bg-amber-50 text-amber-600", lastGenerated: "15-noy, 2025", format: "PDF" },
  { id: "4", title: "Baholar hisoboti", description: "Talabalar baholarining umumiy tahlili", icon: BarChart3, color: "bg-violet-50 text-violet-600", lastGenerated: "12-noy, 2025", format: "Excel" },
  { id: "5", title: "O'qituvchilar hisoboti", description: "O'qituvchilar ish ko'rsatkichlari va reytingi", icon: Users, color: "bg-orange-50 text-orange-600", lastGenerated: "10-noy, 2025", format: "PDF" },
  { id: "6", title: "To'lovlar hisoboti", description: "To'lov tarixi, qarzdorlar va tushum tahlili", icon: CreditCard, color: "bg-red-50 text-red-600", lastGenerated: "8-noy, 2025", format: "Excel" },
];

export function HisobotlarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Hisobotlar</h1>
          <p className="mt-1 text-sm text-slate-500">Tizim hisobotlarini yaratish va yuklash.</p>
        </div>
        <Button><FileText className="mr-2 size-4" />Yangi hisobot</Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => (
          <Card key={r.id} className="rounded-xl border-slate-200 shadow-xs transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className={`flex size-12 items-center justify-center rounded-xl ${r.color}`}>
                  <r.icon className="size-6" />
                </div>
                <Badge variant="secondary" className="text-xs">{r.format}</Badge>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{r.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">Oxirgi: {r.lastGenerated}</span>
                <Button variant="outline" size="sm"><Download className="mr-1.5 size-3.5" />Yuklash</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
