// Fixed ambient background: deep base + two floating gradient blobs + faint grid.
export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
      <div className="animate-float-slow absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="animate-float-slow-2 absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-violet/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-azure/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
    </div>
  );
}
