"use client";
import { useLocale } from "../../context/locale-context";

const WhoWe = () => {
    const { t, dir } = useLocale();
    return (
        <div className="pb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-6 pt-16" dir={dir}>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                        {t.about.whoWe.title}
                    </h1>
                    <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {t.about.whoWe.intro.p1}
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {t.about.whoWe.intro.p2}
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-slate-700/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                                    {t.about.whoWe.cards.vision.title}
                                </h3>
                                <p className="text-gray-300">
                                    {t.about.whoWe.cards.vision.description}
                                </p>
                            </div>
                            <div className="bg-slate-700/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                                    {t.about.whoWe.cards.mission.title}
                                </h3>
                                <p className="text-gray-300">
                                    {t.about.whoWe.cards.mission.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWe;
