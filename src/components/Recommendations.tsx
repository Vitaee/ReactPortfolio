import { UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export function Recommendations() {
  return (
    <AnimatedSection>
      <section className="py-20" id="recommendations">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl font-bold">Recommendations</h2>
          </div>
          <div className="flex justify-center">
            <div className="glass-card rounded-xl border-l-2 border-green-500 w-full max-w-lg transition-all hover:shadow-lg hover:shadow-green-500/10">
              <div className="p-4 sm:p-6 pb-0 sm:pb-0">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 p-3 rounded-lg shrink-0">
                    <UserCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-50">Philip Treleaven</h3>
                    <p className="text-zinc-400">Professor of Computing, University College London (UCL)</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 pt-3 sm:pt-3">
                <div className="flex flex-col items-start gap-1">
                  <Button variant="link" asChild className="h-auto p-0 text-green-400 hover:text-green-300">
                    <a href="mailto:p.treleaven@ucl.ac.uk">
                      p.treleaven@ucl.ac.uk
                    </a>
                  </Button>
                  <Button variant="link" asChild className="h-auto p-0 text-green-400 hover:text-green-300">
                    <a
                      href="https://docdro.id/Cd8fmlR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Recommendation Letter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}