import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"

export function FooterMeta() {
  return (
    <footer className='md:hidden fixed bottom-0 inset-x-0 z-40 flex flex-row items-center justify-between gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border-t border-white/[0.06] text-[10px] text-foreground/40'>
      <div className='flex items-center gap-3'>
        <ComplianceModal />
        <span className='text-foreground/20'>·</span>
        <p><AreculateirHoverPreview /></p>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-foreground/30 text-[9px] tracking-widest uppercase'>Deployed on</span>
        <svg viewBox='0 0 116 100' className='h-3 w-auto opacity-40 fill-white' xmlns='http://www.w3.org/2000/svg'><path d='M57.5 0L115 100H0L57.5 0z'/></svg>
        <span className='text-foreground/20'>·</span>
        <svg viewBox='0 0 4438 1000' className='h-2.5 w-auto opacity-40 fill-white' xmlns='http://www.w3.org/2000/svg'><path d='M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2344.88 812.5 2430.88 771.25 2494.63 704.5L2367.75 629.25C2330.88 667.75 2286 687.5 2239.38 687.5C2162.62 687.5 2097.75 637.25 2073.75 562.5H2514.75C2518.5 548.75 2520.75 534.25 2520.75 518.75C2520.75 362.5 2403 250 2223.75 250ZM2073.75 500C2095.13 421.25 2152.5 375 2223.75 375C2295 375 2352.38 421.25 2373.75 500H2073.75ZM3515.63 250C3343.13 250 3218.75 362.5 3218.75 531.25C3218.75 700 3358.6 812.5 3531.25 812.5C3636.75 812.5 3722.75 771.25 3786.5 704.5L3659.63 629.25C3622.75 667.75 3577.88 687.5 3531.25 687.5C3454.5 687.5 3389.63 637.25 3365.63 562.5H3806.63C3810.38 548.75 3812.63 534.25 3812.63 518.75C3812.63 362.5 3694.88 250 3515.63 250ZM3365.63 500C3387 421.25 3444.38 375 3515.63 375C3586.88 375 3644.25 421.25 3665.63 500H3365.63ZM1371.25 250C1198.75 250 1074.38 362.5 1074.38 531.25C1074.38 700 1214.22 812.5 1386.88 812.5C1492.38 812.5 1578.38 771.25 1642.13 704.5L1515.25 629.25C1478.38 667.75 1433.5 687.5 1386.88 687.5C1310.13 687.5 1245.25 637.25 1221.25 562.5H1662.25C1666 548.75 1668.25 534.25 1668.25 518.75C1668.25 362.5 1550.5 250 1371.25 250ZM1221.25 500C1242.63 421.25 1300 375 1371.25 375C1442.5 375 1499.88 421.25 1521.25 500H1221.25ZM4064.88 0L3750 562.5L3435.13 0H3293.88L3693.88 625L3293.88 1000H3435.13L3750 625L4064.88 1000H4206.13L3806.13 625L4206.13 0H4064.88ZM622.5 0L0 1000H166.88L622.5 185.94L1078.13 1000H1245L622.5 0ZM2763.88 422.81V250H2638.88V800H2763.88V562.5C2763.88 455 2826.88 375 2939.38 375H2952.13V250C2859.88 250 2796.13 320.31 2763.88 422.81Z'/></svg>
      </div>
      <p className='flex-shrink-0'>&copy;2026</p>
    </footer>
  )
}
