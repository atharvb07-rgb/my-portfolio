import { socialWorkData } from "@/data/portfolio";
import { ArrowLeft, MapPin, Calendar, Heart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Tell Next.js which pages to build
export async function generateStaticParams() {
    return socialWorkData.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function SocialPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const data = socialWorkData.find((p) => p.id.toString() === id);

    if (!data) return notFound();

    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-pink-500/30">

            {/* 1. Header Section */}
            <div className="relative pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto">

                <Link href="/#social" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} /> Back to Volunteering
                </Link>

                <span className="inline-block p-2 rounded-full bg-pink-500/10 text-pink-500 mb-6">
                    <Heart size={20} />
                </span>

                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                    {data.role}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-zinc-400 font-mono uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        {data.org}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {data.date}
                    </div>
                    {data.location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {data.location}
                        </div>
                    )}
                </div>
            </div>

            {/* 2. Main Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Story Text */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-6">The Story</h2>
                        <div className="text-zinc-400 text-lg leading-relaxed space-y-6">
                            <p>{data.content || data.description}</p>
                        </div>

                        {/* Impact Box */}
                        {data.impact && (
                            <div className="mt-10 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 border-l-4 border-l-pink-500">
                                <h3 className="text-pink-500 font-bold uppercase text-xs tracking-widest mb-2">Key Impact</h3>
                                <p className="text-2xl font-bold text-white">{data.impact}</p>
                            </div>
                        )}
                    </div>

                    {/* Images Sidebar */}
                    <div className="space-y-4">
                        {data.images && data.images.map((img, i) => (
                            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                                {/* Placeholder for images until you add them */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 bg-zinc-900">
                                    {/* Use actual Image component when you have files */}
                                    {/* <Image src={img} alt="Social Work" fill className="object-cover" /> */}
                                    <span className="text-xs">Image {i + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}