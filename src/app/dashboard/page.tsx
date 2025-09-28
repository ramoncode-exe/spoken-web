"use client"

import React, { useState } from "react";
import { Bolt, Book, Clock, CheckCircle, Globe, LifeBuoy, User } from 'lucide-react';

export default function DashboardPage() {

    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-300">Bem-vindo ao seu espaço de aprendizado no Spooken 🚀</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow">
                            <div className="p-3 rounded-md bg-[#5a33c2]/20 text-[#5a33c2]"><Book size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Palavras descobertas</div>
                                <div className="text-xl font-bold">1.234</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow">
                            <div className="p-3 rounded-md bg-[#00b4d8]/20 text-[#00B4D8]"><Bolt size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Sua ofensiva</div>
                                <div className="text-xl font-bold">Alta</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow">
                            <div className="p-3 rounded-md bg-[#ffd166]/20 text-[#ffd166]"><Clock size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Horas estudadas</div>
                                <div className="text-xl font-bold">42h</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-[#0f1720] shadow">
                            <div className="p-3 rounded-md bg-[#7ee4b5]/20 text-[#7ee4b5]"><CheckCircle size={22} /></div>
                            <div>
                                <div className="text-sm text-gray-400">Lições concluídas</div>
                                <div className="text-xl font-bold">80</div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary widgets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        <div className="p-4 rounded-lg bg-[#0b1417] border border-gray-800 shadow">
                            <h3 className="font-semibold">Em andamento</h3>
                            <p className="text-sm text-gray-400 mt-2">2 lições ativas</p>
                        </div>

                        <div className="p-4 rounded-lg bg-[#0b1417] border border-gray-800 shadow">
                            <h3 className="font-semibold">Próximos Idiomas</h3>
                            <p className="text-sm text-gray-400 mt-2">Inglês, Espanhol</p>
                        </div>

                        <div className="p-4 rounded-lg bg-[#0b1417] border border-gray-800 shadow">
                            <h3 className="font-semibold">Novidades</h3>
                            <p className="text-sm text-gray-400 mt-2">Nova lição disponível: 'Conversação'</p>
                        </div>

                        <div className="p-4 rounded-lg bg-[#0b1417] border border-gray-800 shadow">
                            <h3 className="font-semibold">Suporte</h3>
                            <p className="text-sm text-gray-400 mt-2">Fale conosco via email ou chat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
