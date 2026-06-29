import { useState } from "react";
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Clock,
  Search,
  Download,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getInitials, formatPrice } from "@/lib/data";

interface Payment {
  id: string;
  studentName: string;
  avatar: string;
  groupName: string;
  amount: number;
  method: string;
  date: string;
  status: "paid" | "pending" | "overdue";
}

const payments: Payment[] = [
  { id: "1", studentName: "Bobur Tojiev", avatar: "https://i.pravatar.cc/150?img=11", groupName: "Frontend-01", amount: 490000, method: "Payme", date: "22-noy", status: "paid" },
  { id: "2", studentName: "Zilola Ahmedova", avatar: "https://i.pravatar.cc/150?img=20", groupName: "Dizayn-02", amount: 890000, method: "Uzcard", date: "21-noy", status: "paid" },
  { id: "3", studentName: "Rustam Olimov", avatar: "https://i.pravatar.cc/150?img=15", groupName: "Backend-03", amount: 790000, method: "Click", date: "20-noy", status: "pending" },
  { id: "4", studentName: "Lola Karimova", avatar: "https://i.pravatar.cc/150?img=24", groupName: "Frontend-01", amount: 490000, method: "Payme", date: "18-noy", status: "overdue" },
  { id: "5", studentName: "Madina Nazarova", avatar: "https://i.pravatar.cc/150?img=26", groupName: "Dizayn-02", amount: 890000, method: "Click", date: "19-noy", status: "paid" },
  { id: "6", studentName: "Davron Saidov", avatar: "https://i.pravatar.cc/150?img=33", groupName: "Backend-03", amount: 790000, method: "Uzcard", date: "17-noy", status: "paid" },
  { id: "7", studentName: "Sevinch Rahmatova", avatar: "https://i.pravatar.cc/150?img=29", groupName: "Frontend-02", amount: 490000, method: "Payme", date: "16-noy", status: "overdue" },
  { id: "8", studentName: "Sardor Yusupov", avatar: "https://i.pravatar.cc/150?img=51", groupName: "Mobil-01", amount: 990000, method: "Click", date: "15-noy", status: "paid" },
];

const statusMap = { paid: { label: "To'langan", class: "bg-emerald-50 text-emerald-700" }, pending: { label: "Kutilmoqda", class: "bg-amber-50 text-amber-700" }, overdue: { label: "Qarzdor", class: "bg-red-50 text-red-700" } };

const totalPaid = payments.filter((p) => p.status === "paid").reduce((s, p) => s + p.amount, 0);

const stats = [
  { label: "Jami tushum", value: formatPrice(totalPaid), icon: DollarSign, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { label: "To'lovlar soni", value: String(payments.length), icon: CreditCard, color: "bg-blue-50 text-blue-600", border: "border-blue-200" },
  { label: "Kutilmoqda", value: "3", icon: Clock, color: "bg-amber-50 text-amber-600", border: "border-amber-200" },
  { label: "O'sish", value: "+14%", icon: TrendingUp, color: "bg-violet-50 text-violet-600", border: "border-violet-200" },
];

export function AdminTolovlarPage() {
  const [search, setSearch] = useState("");

  const filtered = payments.filter((p) =>
    !search || p.studentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">To'lovlar</h1>
          <p className="mt-1 text-sm text-slate-500">Barcha to'lovlarni kuzatish va boshqarish.</p>
        </div>
        <Button><Download className="mr-2 size-4" />Eksport</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-xl border bg-white p-5 shadow-xs ${s.border}`}>
            <div className={`flex size-10 items-center justify-center rounded-lg ${s.color}`}><s.icon className="size-5" /></div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{s.value}</p>
            <p className="mt-0.5 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <Card className="rounded-xl border-slate-200 shadow-xs">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base">To'lovlar tarixi</CardTitle>
          <div className="relative w-56">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Talaba qidirish..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Talaba</TableHead>
                <TableHead>Guruh</TableHead>
                <TableHead>Summa</TableHead>
                <TableHead>Usul</TableHead>
                <TableHead>Sana</TableHead>
                <TableHead>Holat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src={p.avatar} />
                        <AvatarFallback className="bg-blue-100 text-[10px] text-blue-700">{getInitials(p.studentName)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{p.studentName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500">{p.groupName}</TableCell>
                  <TableCell className="font-semibold">{formatPrice(p.amount)}</TableCell>
                  <TableCell className="text-slate-500">{p.method}</TableCell>
                  <TableCell className="text-slate-500">{p.date}</TableCell>
                  <TableCell><Badge className={`shadow-none ${statusMap[p.status].class}`}>{statusMap[p.status].label}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
