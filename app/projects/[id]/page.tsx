import { achievementsData } from "@/data/portfolio";
import { ArrowLeft, Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return achievementsData.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function AchievementPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const item = achievementsData.find((p) => p.id.toString() === id);

    if (!item) return notFound();

    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 pb-20">

            {/* HEADER */}
            <div className="relative h-[50vh] w-full flex flex-col justify-center px-6 md:px-20 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />

                <Link href="/#achievements" className="absolute top-10 left-6 md:left-20 z-20 flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Awards</span>
                </Link>

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/20">
                            {item.category}
                        </span>
                        <span className="flex items-center gap-2 text-zinc-400 text-sm">
                            <Calendar size={14} /> {item.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                        {item.title}
                    </h1>

                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                            <Award className="text-white" size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider">Issued By</p>
                            <p className="text-lg font-bold text-white">{item.issuer}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* LEFT COL */}
                <div className="md:col-span-2 space-y-10">
                    <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
                        <h2 className="text-2xl font-bold mb-4 text-white">The Story</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            {item.details}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 p-8 rounded-3xl">
                        <h2 className="text-xl font-bold mb-4 text-indigo-300 flex items-center gap-2">
                            <Award size={20} /> Impact & Recognition
                        </h2>
                        <p className="text-indigo-100/80 text-lg">
                            "{item.impact}"
                        </p>
                    </div>
                </div>

                {/* RIGHT COL - IMAGE FIX */}
                <div className="space-y-6">

                    <div className="p-2 bg-white rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="relative w-full aspect-[4/3] bg-zinc-200 rounded-xl overflow-hidden flex items-center justify-center">

                            {/* I removed the "Certificate Image" text. 
                        If you still see text here, you are editing the wrong file! 
                     */}
                            <img
                                src={item.image}
                                alt="Certificate"
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>

                    <a href={item.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10">
                        Verify Credential <ExternalLink size={18} />
                    </a>

                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Skills Validated</h3>
                        <div className="flex flex-col gap-3">
                            {item.skills?.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle size={16} className="text-green-500" />
                                    <span className="text-sm font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
}