import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  Music,
  Users,
  Trophy,
  Crown,
  Star,
  Info,
  BookOpen,
  ThumbsUp,
  XCircle,
  Mic2,
  Guitar
} from 'lucide-react';
import { SOLER_DATA, SOLER_CONJUGATION, SolerQuestion } from './constants';

type GameState = 'start' | 'theory' | 'playing' | 'results';
type Player = 'Gor' | 'Gayane';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ Gor: 0, Gayane: 0 });
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Gor');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shuffledQuests, setShuffledQuests] = useState<SolerQuestion[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      setShuffledQuests([...SOLER_DATA].sort(() => 0.5 - Math.random()));
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentIndex(0);
    setScores({ Gor: 0, Gayane: 0 });
    setCurrentPlayer('Gor');
    setFeedback(null);
    setShowExplanation(false);
  };

  const handleAnswer = (answer: string) => {
    if (feedback) return;
    const isCorrect = answer === shuffledQuests[currentIndex].correct;
    if (isCorrect) {
      setScores(prev => ({ ...prev, [currentPlayer]: prev[currentPlayer] + 1 }));
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    setFeedback(null);
    setShowExplanation(false);
    if (currentIndex < 14) {
      setCurrentIndex(prev => prev + 1);
      setCurrentPlayer(prev => prev === 'Gor' ? 'Gayane' : 'Gor');
    } else {
      setGameState('results');
    }
  };

  const winner = scores.Gor > scores.Gayane ? 'Gor' : scores.Gayane > scores.Gor ? 'Gayane' : 'Draw';

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-900 font-sans flex flex-col overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      {/* Playful Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d97706 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      </div>

      <header className="bg-white/90 backdrop-blur-md border-b-4 border-yellow-500 px-6 py-4 z-50 sticky top-0 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <PlayerDisplay name="ԳՈՌ" score={scores.Gor} active={currentPlayer === 'Gor'} color="orange" />
          
          <div className="flex flex-col items-center">
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="bg-yellow-400 p-2 rounded-2xl shadow-md border-2 border-orange-600"
            >
                <Music className="text-orange-950" size={24} />
            </motion.div>
            <span className="text-[10px] font-black uppercase text-orange-900 mt-2 tracking-widest bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
               ՄՐՑՈՒՅԹ {currentIndex + 1} / 15
            </span>
          </div>

          <PlayerDisplay name="ԳԱՅԱՆԵ" score={scores.Gayane} active={currentPlayer === 'Gayane'} color="pink" textRight />
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [-2, 2, -2],
                    y: [0, -10, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="flex flex-col md:flex-row gap-8 items-center justify-center relative z-10"
                >
                  <img 
                    src="https://ais-dev-rkan2uzs745ezd3osqmitp-111439243129.europe-west3.run.app/musica.png" 
                    alt="Musica" 
                    className="w-72 h-auto rounded-[3rem] shadow-2xl border-8 border-white bg-white"
                  />
                  <img 
                    src="https://ais-dev-rkan2uzs745ezd3osqmitp-111439243129.europe-west3.run.app/amigos.png" 
                    alt="Amigos" 
                    className="w-64 h-auto rounded-[3rem] shadow-2xl border-8 border-white bg-white mt-10 md:mt-20 md:-ml-20 rotate-6"
                  />
                </motion.div>
                <div className="absolute -inset-10 bg-yellow-400/20 rounded-full blur-[100px] -z-10" />
              </div>

              <div className="space-y-4 px-4 w-full">
                <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-tight md:leading-none text-orange-950 break-words">
                   ՍՈՎՈՐՈՒԹՅՈՒՆՆԵՐԻ <span className="text-red-500 block">ԵՐԵԿՈՒՅԹ</span>
                </h1>
                <p className="text-orange-900/40 font-black uppercase text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.5em]">
                  ԳՈՌ VS ԳԱՅԱՆԵ • SOLER + INFINITIVE
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-lg">
                <button 
                  onClick={() => setGameState('theory')}
                  className="flex-1 py-5 md:py-7 bg-white border-4 border-yellow-500 text-orange-950 rounded-[2rem] md:rounded-[2.5rem] font-black text-lg md:text-xl uppercase tracking-wider md:tracking-widest hover:bg-yellow-50 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <BookOpen size={24} className="md:hidden" />
                  <BookOpen size={28} className="hidden md:block" /> Տեսություն
                </button>
                <button 
                  onClick={startGame}
                  className="flex-1 py-5 md:py-7 bg-orange-600 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-lg md:text-xl uppercase tracking-wider md:tracking-widest hover:bg-orange-700 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Star size={24} className="md:hidden" />
                  <Star size={28} className="hidden md:block" /> Սկսել
                </button>
              </div>
            </motion.div>
          )}

          {gameState === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="space-y-8 py-8"
            >
              <div className="bg-white border-8 border-yellow-200 p-8 md:p-14 rounded-[4rem] shadow-xl">
                 <h2 className="text-4xl md:text-6xl font-black text-orange-950 italic uppercase mb-12 flex items-center gap-5 border-b-4 border-orange-50 pb-6">
                    <Sparkles size={48} className="text-yellow-500" /> SOLER-Ի ԳԱՂՏՆԻՔԸ
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOLER_CONJUGATION.map((item, i) => (
                      <div key={i} className="bg-orange-50 p-7 rounded-[2rem] border-2 border-orange-100 hover:scale-105 transition-transform">
                        <p className="text-[10px] font-black uppercase text-orange-400 tracking-[0.2em] mb-2">{item.subject}</p>
                        <p className="text-3xl md:text-4xl font-black text-orange-950">{item.conjugation}</p>
                        <p className="text-xs text-orange-900/30 font-bold mt-2 uppercase tracking-widest italic">{item.note}</p>
                      </div>
                    ))}
                 </div>

                 <div className="mt-12 p-8 bg-yellow-400/10 rounded-[3rem] border-4 border-yellow-400/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <Mic2 size={120} className="text-orange-950" />
                    </div>
                    <h4 className="font-black text-yellow-600 uppercase text-xs tracking-widest mb-4 flex items-center gap-3">
                       <Info size={20} /> ԿԱՆՈՆԸ ԵՐԵԽԱՆԵՐԻ ՀԱՄԱՐ՝
                    </h4>
                    <p className="text-orange-950 font-bold text-2xl leading-relaxed italic relative z-10">
                      Եթե ուզում ես ասել, որ մի բան "սովորաբար" ես անում, օգտագործիր <span className="text-red-500 underline decoration-wavy">SOLER</span>-ը, իսկ հետո ավելացրու այն գործողությունը, որն անում ես:
                    </p>
                    <div className="mt-6 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                       <span className="shrink-0 bg-white px-6 py-3 rounded-full text-sm font-black text-orange-950 border-2 border-orange-100">Suelo bailar 💃</span>
                       <span className="shrink-0 bg-white px-6 py-3 rounded-full text-sm font-black text-orange-950 border-2 border-orange-100">Sueles cantar 🎤</span>
                       <span className="shrink-0 bg-white px-6 py-3 rounded-full text-sm font-black text-orange-950 border-2 border-orange-100">Solemos jugar ⚽</span>
                    </div>
                 </div>
              </div>

              <button 
                onClick={startGame}
                className="group w-full py-9 bg-orange-600 text-white rounded-[3rem] font-black text-3xl uppercase tracking-widest hover:bg-orange-700 transition-all shadow-2xl flex items-center justify-center gap-6"
              >
                ՊԱՏՐԱՍՏ ԵՄ ՄԱՐՏԻՆ <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform" />
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col gap-10 justify-center py-6"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                 {/* Player's Habit Bag */}
                 <div className="lg:w-1/3 flex flex-col gap-6 order-2 lg:order-1">
                    <PuzzleBoard 
                      player="Gor" 
                      revealedCount={scores.Gor} 
                      active={currentPlayer === 'Gor'} 
                      color="orange"
                      image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
                    />
                    <PuzzleBoard 
                      player="Gayane" 
                      revealedCount={scores.Gayane} 
                      active={currentPlayer === 'Gayane'} 
                      color="pink"
                      image="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
                    />
                 </div>

                 {/* Question Card */}
                 <div className="lg:w-2/3 flex flex-col order-1 lg:order-2">
                    <div className="bg-white p-6 md:p-14 rounded-[3rem] md:rounded-[4rem] border-4 md:border-8 border-yellow-200 shadow-2xl relative overflow-hidden flex-1">
                       <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500" />
                       
                       <div className="flex items-center justify-between mb-8 md:mb-10">
                          <div className="bg-orange-50 px-6 py-2 rounded-full border-2 border-orange-100 flex items-center gap-3">
                             <Guitar size={20} className="text-orange-600" />
                             <span className="text-lg font-black text-orange-950 uppercase tracking-widest">
                                {shuffledQuests[currentIndex]?.habit}
                             </span>
                          </div>
                          <span className="text-4xl animate-bounce">{shuffledQuests[currentIndex]?.icon}</span>
                       </div>

                       <p className="text-orange-900/30 font-black text-sm tracking-widest uppercase mb-6">
                         ԹԱՐԳՄԱՆՈՒԹՅՈՒՆ՝ {shuffledQuests[currentIndex]?.translation}
                       </p>

                       <h2 className="text-2xl md:text-5xl font-black text-slate-900 leading-[1.2] uppercase italic mb-10 md:mb-16">
                         {shuffledQuests[currentIndex]?.sentence.split('____').map((part, i) => (
                           <React.Fragment key={i}>
                             {part}
                             {i < shuffledQuests[currentIndex]?.sentence.split('____').length - 1 && (
                               <span className={`inline-block border-b-[6px] md:border-b-[10px] mx-2 transition-all duration-300 px-3 md:px-6 min-w-[120px] md:min-w-[200px] ${feedback ? (feedback === 'correct' ? 'text-green-600 border-green-500' : 'text-red-500 border-red-500') : 'text-orange-50 border-orange-100 border-dashed'}`}>
                                 {feedback ? shuffledQuests[currentIndex].correct : '____'}
                               </span>
                             )}
                           </React.Fragment>
                         ))}
                       </h2>

                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                          {shuffledQuests[currentIndex]?.options.map((opt, i) => (
                            <button
                              key={i}
                              disabled={!!feedback}
                              onClick={() => handleAnswer(opt)}
                              className={`
                                py-6 md:py-9 px-4 rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl italic uppercase transition-all duration-300 border-4
                                ${feedback && opt === shuffledQuests[currentIndex].correct 
                                  ? 'bg-green-500 border-green-400 text-white shadow-xl scale-105 z-10' 
                                  : feedback && opt !== shuffledQuests[currentIndex].correct
                                    ? 'bg-slate-50 border-slate-100 text-slate-300 opacity-30 grayscale'
                                    : 'bg-white border-orange-50 text-orange-950 hover:border-yellow-400 hover:bg-yellow-50 shadow-lg active:scale-95'
                                }
                              `}
                            >
                              {opt}
                            </button>
                          ))}
                       </div>
                    </div>

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, y: 40 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          className="mt-8 p-10 bg-orange-950 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
                        >
                           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                           
                           <div className="flex items-start gap-10 relative z-10">
                              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl ${feedback === 'correct' ? 'bg-green-500' : 'bg-red-500'}`}>
                                {feedback === 'correct' ? <ThumbsUp size={40} /> : <XCircle size={40} />}
                              </div>
                              <div className="flex-1">
                                <p className="font-black text-yellow-400 uppercase text-xs tracking-[0.3em] mb-3 opacity-60">ԻՆՉՈՒ՞ ԱՅՍՊԵՍ</p>
                                <p className="text-2xl md:text-3xl font-bold leading-relaxed italic mb-10">"{shuffledQuests[currentIndex].explanation}"</p>
                                
                                <button 
                                  onClick={handleNext}
                                  className="group flex items-center justify-center gap-4 bg-yellow-400 text-orange-950 px-16 py-7 rounded-[2rem] font-black uppercase text-2xl tracking-widest transition-all hover:bg-white shadow-2xl active:scale-95"
                                >
                                   ՀԱՋՈՐԴ ՀԱՐՑԸ <ArrowRight className="group-hover:translate-x-4 transition-transform" size={32} />
                                </button>
                              </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
              </div>
            </motion.div>
          )}

          {gameState === 'results' && (
            <motion.div 
              key="results"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center space-y-12 py-10"
            >
              <div className="relative">
                 <motion.div 
                   animate={{ 
                    rotate: [15, -15, 15],
                    scale: [1, 1.1, 1]
                   }} 
                   transition={{ repeat: Infinity, duration: 4 }}
                   className={`w-64 h-64 md:w-80 md:h-80 rounded-[4rem] md:rounded-[6rem] flex items-center justify-center mx-auto shadow-3xl border-8 ${winner === 'Gor' ? 'border-orange-500 bg-orange-50' : winner === 'Gayane' ? 'border-pink-500 bg-pink-50' : 'border-slate-500 bg-slate-50'}`}
                 >
                    {winner === 'Draw' ? <Trophy className="w-32 h-32 md:w-40 md:h-40 text-slate-300" /> : <Crown className={`w-32 h-32 md:w-44 md:h-44 ${winner === 'Gor' ? 'text-orange-500' : 'text-pink-500'}`} />}
                 </motion.div>
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-12 py-4 rounded-full font-black text-2xl text-orange-950 shadow-2xl border-4 border-yellow-200 flex items-center gap-3">
                    <Sparkles className="text-yellow-500" /> ՀԱՂԹԱՆԱԿ <Sparkles className="text-yellow-500" />
                 </div>
              </div>
              
              <div className="space-y-4">
                    <h2 className="text-3xl md:text-7xl font-black italic uppercase text-orange-950 tracking-tighter leading-none">
                      {winner === 'Draw' ? "ՀԱՎԱՍԱՐ" : `${winner === 'Gor' ? 'ԳՈՌԸ' : 'ԳԱՅԱՆԵՆ'} ՀԱՂԹԵՑ`}
                    </h2>
                <div className="flex justify-center gap-14 py-12">
                  <FinalResult name="ԳՈՌ" score={scores.Gor} color="bg-orange-500" />
                  <FinalResult name="ԳԱՅԱՆԵ" score={scores.Gayane} color="bg-pink-500" />
                </div>
              </div>

              <button 
                onClick={() => setGameState('start')}
                className="group px-24 py-10 bg-orange-600 text-white rounded-[3rem] font-black text-3xl uppercase tracking-widest hover:bg-orange-700 transition-all flex items-center justify-center gap-6 shadow-2xl active:scale-95"
              >
                <RotateCcw size={40} className="group-hover:rotate-180 transition-transform duration-1000" /> ՎԵՐԱՍԿՍԵԼ
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="px-8 py-14 text-center relative z-10 w-full mt-auto">
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-30">
           <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-orange-950">
              <Star size={18} /> HABIT FESTIVAL
           </div>
           <div className="h-6 w-px bg-orange-950/20 hidden md:block" />
           <p className="text-[10px] font-black uppercase tracking-[0.8em] text-orange-950">
             SOLER POWER • 2026
           </p>
        </div>
      </footer>
    </div>
  );
}

function PlayerDisplay({ name, score, active, color, textRight }: any) {
  const isOrange = color === 'orange';
  return (
    <div className={`flex items-center gap-6 transition-all duration-700 ${active ? 'scale-110 opacity-100 drop-shadow-xl' : 'opacity-20 grayscale scale-90'}`}>
      {!textRight && (
        <div className={`w-16 h-16 ${isOrange ? 'bg-orange-500 shadow-orange-200' : 'bg-pink-500 shadow-pink-200'} rounded-[1.8rem] flex items-center justify-center text-white shadow-lg border-4 border-white`}>
            <User size={32} />
        </div>
      )}
      <div className={textRight ? 'text-right' : 'text-left'}>
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1 leading-none">{name}</p>
        <p className="text-2xl md:text-4xl font-black text-orange-950 leading-none tracking-tighter">{score}</p>
      </div>
      {textRight && (
        <div className={`w-16 h-16 ${isOrange ? 'bg-orange-500 shadow-orange-200' : 'bg-pink-500 shadow-pink-200'} rounded-[1.8rem] flex items-center justify-center text-white shadow-lg border-4 border-white`}>
            <User size={32} />
        </div>
      )}
    </div>
  );
}

function PuzzleBoard({ player, revealedCount, active, color, image }: any) {
  const isGor = player === 'Gor';
  const isOrange = color === 'orange';
  const totalPieces = 6; // 3x2 grid
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isGor ? -40 : 40 }}
      animate={{ opacity: active ? 1 : 0.4, x: 0, scale: active ? 1 : 0.95 }}
      className={`p-6 rounded-[3rem] border-4 relative overflow-hidden transition-all duration-500 ${active ? 'bg-white border-yellow-400 shadow-2xl' : 'bg-slate-50 border-slate-200'}`}
    >
       <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-[1rem] flex items-center justify-center ${isOrange ? 'bg-orange-500' : 'bg-pink-500'} text-white shadow-lg`}>
              <User size={20} />
          </div>
          <span className={`text-lg font-black uppercase italic tracking-widest ${isOrange ? 'text-orange-500' : 'text-pink-500'}`}>{player}</span>
         </div>
         <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
           {revealedCount} / {totalPieces} 🧩
         </span>
      </div>

      <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden border-4 border-slate-100 bg-slate-200">
         {/* The Background Image */}
         <img 
           src={image} 
           alt="Puzzle" 
           className="w-full h-full object-cover"
         />

         {/* The Puzzle Overlay (Tiles) */}
         <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5">
            {Array.from({ length: totalPieces }).map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  opacity: i < revealedCount ? 0 : 1,
                  scale: i < revealedCount ? 0.8 : 1
                }}
                className={`bg-slate-300 border border-slate-400/20 flex items-center justify-center text-slate-100 font-black text-xs ${i < revealedCount ? 'pointer-events-none' : ''}`}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {i >= revealedCount && (
                  <Sparkles size={12} className="opacity-20" />
                )}
              </motion.div>
            ))}
         </div>
         
         {revealedCount >= totalPieces && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="absolute inset-0 bg-white/20 backdrop-blur-none flex items-center justify-center border-4 border-yellow-400 pointer-events-none"
           >
              <Crown className="text-yellow-400 drop-shadow-lg" size={48} />
           </motion.div>
         )}
      </div>
    </motion.div>
  );
}

function FinalResult({ name, score, color }: any) {
  return (
    <div className="flex flex-col items-center group">
       <div className={`${color} text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center text-5xl font-black mb-4 shadow-2xl group-hover:scale-110 transition-transform border-8 border-white ring-8 ring-slate-100`}>
          {score}
       </div>
       <p className="text-sm font-black uppercase text-orange-950/40 tracking-[0.3em]">{name}</p>
    </div>
  );
}
