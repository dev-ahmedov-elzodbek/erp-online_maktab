import { useState } from "react";
import {
  MessageSquare,
  Send,
  Search,
  Users,
  Clock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInitials } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  role: string;
  preview: string;
  time: string;
  unread: boolean;
  messages: { text: string; fromMe: boolean; time: string }[];
}

const conversations: Message[] = [
  { id: "1", sender: "Akmal Karimov", avatar: "https://i.pravatar.cc/150?img=12", role: "O'qituvchi", preview: "Frontend-01 guruhi uchun yangi material tayyorladim.", time: "10:30", unread: true, messages: [
    { text: "Assalomu alaykum! Frontend-01 guruhi uchun yangi material tayyorladim.", fromMe: false, time: "10:28" },
    { text: "Platformaga yuklab qo'ysam bo'ladimi?", fromMe: false, time: "10:30" },
  ]},
  { id: "2", sender: "Bobur Tojiev", avatar: "https://i.pravatar.cc/150?img=11", role: "Talaba", preview: "To'lov muddati haqida savol bor edi.", time: "09:45", unread: true, messages: [
    { text: "Assalomu alaykum, to'lov muddati haqida savol bor edi.", fromMe: false, time: "09:45" },
  ]},
  { id: "3", sender: "Madina Ergasheva", avatar: "https://i.pravatar.cc/150?img=47", role: "O'qituvchi", preview: "Dizayn-02 guruhi natijalarini yubordim.", time: "Kecha", unread: false, messages: [
    { text: "Dizayn-02 guruhi natijalarini yubordim. Ko'rib chiqing.", fromMe: false, time: "18:20" },
    { text: "Rahmat, ko'rib chiqaman.", fromMe: true, time: "18:35" },
  ]},
  { id: "4", sender: "Sherzod Rahimov", avatar: "https://i.pravatar.cc/150?img=53", role: "O'qituvchi", preview: "Backend-03 uchun yangi topshiriq tayyor.", time: "Kecha", unread: false, messages: [
    { text: "Backend-03 uchun yangi topshiriq tayyor. Tasdiqlaysizmi?", fromMe: false, time: "16:10" },
    { text: "Ha, joylashtiring.", fromMe: true, time: "16:45" },
  ]},
  { id: "5", sender: "Lola Karimova", avatar: "https://i.pravatar.cc/150?img=24", role: "Talaba", preview: "Darsga kelmayotganim uchun uzr so'rayman.", time: "2 kun oldin", unread: false, messages: [
    { text: "Darsga kelmayotganim uchun uzr so'rayman. Kasalman.", fromMe: false, time: "14:20" },
    { text: "Tez tuzaling! Darslar yozib olinadi.", fromMe: true, time: "14:30" },
  ]},
];

export function XabarlarPage() {
  const [selected, setSelected] = useState<string | null>("1");
  const [search, setSearch] = useState("");
  const [newMsg, setNewMsg] = useState("");

  const active = conversations.find((c) => c.id === selected);
  const filtered = conversations.filter((c) =>
    !search || c.sender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Xabarlar</h1>
        <p className="mt-1 text-sm text-slate-500">O'qituvchilar va talabalar bilan aloqa.</p>
      </div>

      <div className="grid gap-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs lg:grid-cols-3" style={{ minHeight: 520 }}>
        <div className="border-r border-slate-200">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Qidirish..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors",
                  selected === c.id ? "bg-blue-50" : "hover:bg-slate-50"
                )}
              >
                <div className="relative">
                  <Avatar className="size-10">
                    <AvatarImage src={c.avatar} />
                    <AvatarFallback>{getInitials(c.sender)}</AvatarFallback>
                  </Avatar>
                  {c.unread && <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-blue-600 ring-2 ring-white" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className={cn("text-sm", c.unread ? "font-bold text-slate-900" : "font-medium text-slate-700")}>{c.sender}</span>
                    <span className="text-[11px] text-slate-400">{c.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-slate-500">{c.preview}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:col-span-2">
          {active ? (
            <>
              <div className="flex items-center gap-3 border-b px-5 py-3.5">
                <Avatar className="size-9">
                  <AvatarImage src={active.avatar} />
                  <AvatarFallback>{getInitials(active.sender)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{active.sender}</p>
                  <p className="text-xs text-slate-500">{active.role}</p>
                </div>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto p-5">
                {active.messages.map((m, i) => (
                  <div key={i} className={cn("flex", m.fromMe ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-2.5",
                      m.fromMe ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"
                    )}>
                      <p className="text-sm">{m.text}</p>
                      <p className={cn("mt-1 text-[10px]", m.fromMe ? "text-blue-200" : "text-slate-400")}>{m.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Xabar yozing..."
                    className="min-h-10 resize-none"
                    rows={1}
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                  />
                  <Button size="icon"><Send className="size-4" /></Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-slate-400">
              <div className="text-center">
                <MessageSquare className="mx-auto size-10" />
                <p className="mt-2 text-sm">Suhbatni tanlang</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
