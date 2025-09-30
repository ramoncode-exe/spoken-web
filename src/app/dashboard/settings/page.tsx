"use client"

import { useState } from "react"
import { Check, Mail, Bell } from "lucide-react"

export default function SettingsDashboardPage() {


    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto border border-[#c2c2c2]  rounded-lg shadow p-6 text-[#000]">
                <h1 className="text-2xl font-semibold mb-4">Configurações da Conta</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Mail className="w-4 h-4" /> Notificações por Email</h3>
                        <p className="text-sm">Receba atualizações e novidades por email.</p>
                        <div className="mt-3">
                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                />
                                <span className="text-sm">Ativar notificações por email</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2 flex items-center gap-2"><Bell className="w-4 h-4" /> Notificações Push</h3>
                        <p className="text-sm">Receba notificações diretamente no seu dispositivo.</p>
                        <div className="mt-3">
                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                />
                                <span className="text-sm">Ativar notificações push</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="inline-flex items-center gap-2 bg-[#0077b6] hover:bg-[#00659b] text-white py-2 px-4 rounded">
                        <Check className="w-4 h-4" /> Salvar
                    </button>
                </div>
            </div>
        </div>
    )
}