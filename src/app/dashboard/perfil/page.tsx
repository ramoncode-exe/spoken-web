"use client"

import { useState } from "react"
import { Camera, Edit2, X, Check } from "lucide-react"

export default function ProfileDashboardPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState("Ramon Silva")
    const [email, setEmail] = useState("ramon@example.com")
    const [bio, setBio] = useState("Apaixonado por tecnologia e educação. Estudando React e Next.js.")

    function saveProfile() {
        setIsEditing(false)
        console.log("Saved", { name, email, bio })
    }

    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="col-span-1 bg-white dark:bg-slate-900 rounded-lg shadow p-6 flex flex-col items-center">
                    <div className="relative">
                        <img src="/file.svg" alt="avatar" className="w-28 h-28 rounded-full object-cover" />
                        <button
                            aria-label="Alterar foto"
                            className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 shadow-md"
                        >
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>

                    <h2 className="mt-4 text-xl font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>


                    <div className="mt-4 w-full flex gap-2">
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
                        >
                            {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />} {isEditing ? "Cancelar" : "Editar"}
                        </button>

                        {isEditing && (
                            <button
                                onClick={saveProfile}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded"
                            >
                                <Check className="w-4 h-4" /> Salvar
                            </button>
                        )}
                    </div>
                </div>


                <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4">Informações do Perfil</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 dark:text-gray-300">Nome</label>
                            {isEditing ? (
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 w-full rounded border-gray-200 dark:border-slate-800 bg-transparent p-2"
                                />
                            ) : (
                                <div className="mt-1 text-sm text-gray-700 dark:text-gray-200">{name}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
                            {isEditing ? (
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 w-full rounded border-gray-200 dark:border-slate-800 bg-transparent p-2"
                                />
                            ) : (
                                <div className="mt-1 text-sm text-gray-700 dark:text-gray-200">{email}</div>
                            )}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-600 dark:text-gray-300">Bio</label>
                            {isEditing ? (
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    className="mt-1 w-full rounded border-gray-200 dark:border-slate-800 bg-transparent p-2"
                                    rows={4}
                                />
                            ) : (
                                <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{bio}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="font-medium mb-2">Estatísticas</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded">
                                <div className="text-2xl font-bold">12</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Aulas Feitas</div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded">
                                <div className="text-2xl font-bold">84</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Perguntas Feitas</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}