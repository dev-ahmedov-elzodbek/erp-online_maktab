import { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Trophy,
  TrendingUp,
  Search,
  Filter,
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
import { getInitials, groups } from "@/lib/data";

interface GradeEntry {
  id: string;
  studentName: string;
  avatar: string;
  groupName: string;
  assignment: string;
  score: number;
  maxScore: number;
  date: string;
  status: "graded" | "pending";
}

const grades: GradeEntry[] = [
  { id: "1", studentName: "Bobur Tojiev", avatar: "https://i.pravatar.cc/150?img=11", groupName: "Frontend-01", assignment: "Modul 4: React Hooks", score: 88, maxScore: 100, date: "12-noy, 2025", status: "graded" },
  { id: "2", studentName: "Zilola Ahmedova", avatar: "https://i.pravatar.cc/150?img=20", groupName: "Dizayn-02", assignment: "Figma loyiha", score: 95, maxScore: 100, date: "11-noy, 2025", status: "graded" },
  { id: "3", studentName: "Rustam Olimov", avatar: "https://i.pravatar.cc/150?img=15", groupName: "Backend-03", assignment: "Django REST API", score: 72, maxScore: 100, date: "10-noy, 2025", status: "graded" },
  { id: "4", studentName: "Lola Karimova", avatar: "https://i.pravatar.cc/150?img=24", groupName: "Frontend-01", assignment: "JavaScript test", score: 0, maxScore: 100, date: "15-noy, 2025", status: "pending" },
  { id: "5", studentName: "Madina Nazarova", avatar: "https://i.pravatar.cc/150?img=26", groupName: "Dizayn-02", assignment: "UX tadqiqot", score: 91, maxScore: 100, date: "9-noy, 2025", status: "graded" },
  { id: "6", studentName: "Davron Saidov", avatar: "https://i.pravatar.cc/150?img=33", groupName: "Backend-03", assignment: "PostgreSQL test", score: 85, maxScore: 100, date: "8-noy, 2025", status: "graded" },
  { id: "7", studentName: "Sevinch Rahmatova", avatar: "https://i.pravatar.cc/150?img=29", groupName: "Frontend-02", assignment: "CSS Grid loyiha", score: 0, maxScore: 100, date: "14-noy, 2025", status: "pending" },
  { id: "8", studentName: "Sardor Yusupov", avatar: "https://i.pravatar.cc/150?img=51", groupName: "Mobil-01", assignment: "Flutter widget", score: 68, maxScore: 100, date: "7-noy, 2025", status: "graded" },
];

const stats = [
  { label: "O'rtacha ball", value: "83%", icon: BarChart3, color: "bg-blue-50 text-blue-600", border: "border-blue-200" },
  { label: "Baholangan", value: "156", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-200" },
  { label: "Kutilmoqda", value: "12", icon: Trophy, color: "bg-amber-50 text-amber-600", border: "border-amber-200" },
  { label: "Eng yuqori ball", value: "98", icon: TrendingUp, color: "bg-violet-50 text-violet-600", border: "border-violet-200" },
];

function scoreColor(score: number) {
  if (score >= 90) return "text-emerald-600";
  if (score >= 70) return "text-blue-600";
  if (score >= 50) return "text-orange-600";
  return "text-red-600";
}

export function BaholarPage() {
  const [search, setSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Barchasi");

  const filtered = grades.filter((g) => {
    if (selectedGroup !== "Barchasi" && g.groupName !== selectedGroup) return false;
    if (search && !g.studentName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Baholar</h1>
        <p className="mt-1 text-sm text-slate-500">Talabalar baholarini ko'rish va boshqarish.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-xl border bg-white p-5 shadow-xs ${s.border}`}>
            <div className={`flex size-10 items-center justify-center rounded-lg ${s.color}`}>
              <s.icon className="size-5" />
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{s.value}</p>
            <p className="mt-0.5 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <Card className="rounded-xl border-slate-200 shadow-xs">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base">Baholar jadvali</CardTitle>
          <div className="flex gap-2">
            <div className="relative w-56">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Talaba qidirish..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select className="rounded-lg border px-3 py-2 text-sm" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
              <option>Barchasi</option>
              {groups.map((g) => <option key={g.id} value={g.name}>{g.name}</option>)}
            </select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Talaba</TableHead>
                <TableHead>Guruh</TableHead>
                <TableHead>Topshiriq</TableHead>
                <TableHead>Ball</TableHead>
                <TableHead>Sana</TableHead>
                <TableHead>Holat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((g) => (
                <TableRow key={g.id}>
                  <TableCell className="pl-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        {g.avatar && <AvatarImage src={g.avatar} />}
                        <AvatarFallback className="bg-blue-100 text-[10px] text-blue-700">{getInitials(g.studentName)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{g.studentName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500">{g.groupName}</TableCell>
                  <TableCell className="text-slate-500">{g.assignment}</TableCell>
                  <TableCell>
                    {g.status === "graded" ? (
                      <span className={`font-bold ${scoreColor(g.score)}`}>{g.score}/{g.maxScore}</span>
                    ) : <span className="text-slate-400">—</span>}
                  </TableCell>
                  <TableCell className="text-slate-500">{g.date}</TableCell>
                  <TableCell>
                    {g.status === "graded" ? (
                      <Badge className="bg-emerald-50 text-emerald-700 shadow-none">Baholangan</Badge>
                    ) : (
                      <Badge className="bg-amber-50 text-amber-700 shadow-none">Kutilmoqda</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
