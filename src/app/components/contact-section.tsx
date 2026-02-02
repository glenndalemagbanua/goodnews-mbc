import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">Visit Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
            We'd love to meet you! Join us for worship or reach out with any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg dark:bg-slate-700">
                      <MapPin className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 mb-1 dark:text-white">Address</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        123 Church Street<br />
                        Springfield, ST 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg dark:bg-slate-700">
                      <Phone className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 mb-1 dark:text-white">Phone</p>
                      <p className="text-slate-600 dark:text-slate-300">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg dark:bg-slate-700">
                      <Mail className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 mb-1 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-slate-300">info@gracecommunitychurch.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg dark:bg-slate-700">
                      <Clock className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 mb-1 dark:text-white">Service Times</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        Sunday Morning: 9:00 AM & 11:00 AM<br />
                        Wednesday Evening: 7:00 PM<br />
                        Prayer Meeting: Fridays 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="h-full dark:bg-slate-800 dark:border-slate-700">
            <CardContent className="p-0 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d4f27e7%3A0x2fde7f0f4d1e7f9e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              />
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="dark:bg-slate-800 dark:border-slate-700">
          <CardContent className="p-8">
            <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-900 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-slate-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-900 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-slate-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-slate-900 dark:text-slate-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-slate-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-slate-900 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:ring-slate-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}