import { BookOpen, Heart, Users, Cross } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

const doctrines = [
  {
    icon: Cross,
    title: "The Holy Trinity",
    description: "We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.",
    details: "The Trinity is the foundation of our faith - God the Father who created all things, Jesus Christ the Son who redeemed us through His sacrifice, and the Holy Spirit who empowers and guides believers."
  },
  {
    icon: BookOpen,
    title: "Scripture",
    description: "The Bible is the inspired, infallible Word of God and our supreme authority in all matters of faith.",
    details: "We hold that the Scriptures, both Old and New Testament, are divinely inspired and without error in their original writings, providing complete guidance for faith and practice."
  },
  {
    icon: Heart,
    title: "Salvation by Grace",
    description: "Salvation is a free gift of God's grace through faith in Jesus Christ alone.",
    details: "We believe that salvation cannot be earned through good works but is received through faith in Jesus Christ, who died for our sins and rose again, offering eternal life to all who believe."
  },
  {
    icon: Users,
    title: "The Church",
    description: "The Church is the body of Christ, called to worship, fellowship, and serve together.",
    details: "We believe in the universal Church consisting of all believers, and the local church as a community gathered for worship, discipleship, fellowship, and mission to share the Gospel."
  }
];

export function DoctrinesSection() {
  return (
    <section id="doctrines" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">Our Beliefs</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
            Core doctrines and teachings that guide our faith community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctrines.map((doctrine, index) => {
            const Icon = doctrine.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 text-white rounded-lg dark:bg-slate-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2 dark:text-white">{doctrine.title}</CardTitle>
                      <CardDescription className="text-base dark:text-slate-400">{doctrine.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">{doctrine.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-md dark:bg-slate-800 dark:border dark:border-slate-700">
          <h3 className="text-2xl mb-4 text-slate-900 dark:text-white">Our Statement of Faith</h3>
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-slate-600 mb-4 dark:text-slate-300">
              We are a Christ-centered community committed to the authority of Scripture, the power of prayer, 
              and the transforming work of the Holy Spirit. Our mission is to glorify God by making disciples 
              who love Jesus, grow in faith, and serve others.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              We welcome all who seek to know God and grow in relationship with Jesus Christ, regardless of 
              where they are on their spiritual journey. We believe in creating a warm, inclusive environment 
              where people can experience God's love and discover their purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}