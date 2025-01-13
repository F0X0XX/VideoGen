import { cn } from '@/lib/utils';

export function Background({ className }) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070')",
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}