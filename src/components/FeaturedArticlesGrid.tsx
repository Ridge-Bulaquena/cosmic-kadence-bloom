
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedArticlesGrid = () => {
  const proArticles = [
    {
      title: "Constitutional Rights and Due Process",
      summary: "An examination of the constitutional principles at stake in impeachment proceedings and the importance of following due process."
    },
    {
      title: "Political Motivations vs Legal Grounds",
      summary: "Analyzing whether the impeachment efforts are based on solid legal foundations or primarily driven by political considerations."
    },
    {
      title: "Historical Context and Precedent",
      summary: "Looking at past impeachment cases in Philippine history and how they compare to the current situation."
    }
  ];

  const antiArticles = [
    {
      title: "Evidence of Constitutional Violations",
      summary: "A comprehensive review of the documented evidence suggesting violations of constitutional duties and responsibilities."
    },
    {
      title: "Accountability and Public Trust",
      summary: "Why accountability mechanisms are essential for maintaining public trust in democratic institutions."
    },
    {
      title: "Legal Basis for Impeachment",
      summary: "Examining the constitutional grounds and legal framework that support the impeachment proceedings."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
            Featured Analysis
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Examining different perspectives on the Sara Duterte impeachment proceedings
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pro Side - In Defense of Sara */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2 font-serif">
                In Defense of Sara
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {proArticles.map((article, index) => (
                <Card key={index} className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold text-slate-800 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white hover:bg-emerald-50 border-emerald-300 text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Anti Side - The Case Against Her */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-700 mb-2 font-serif">
                The Case Against Her
              </h3>
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {antiArticles.map((article, index) => (
                <Card key={index} className="bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold text-slate-800 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white hover:bg-red-50 border-red-300 text-red-700 hover:text-red-800 transition-colors"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesGrid;
