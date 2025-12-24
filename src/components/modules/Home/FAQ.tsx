import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQS() {
  return (
    <section className="bg-[#0071DF]/10 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-700 text-lg">
            Find quick answers to common questions about consultations,
            prescriptions, privacy, and upcoming features on PH Doc.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-6 md:p-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-[#0071DF]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-7 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What is PH Doc?",
    answer:
      "PH Doc is an online healthcare platform that helps patients find verified doctors, book appointments, and receive prescriptions online using AI-powered doctor recommendations.",
  },
  {
    question: "How does the AI doctor finder work?",
    answer:
      "You enter your symptoms, and our AI analyzes them to suggest the most suitable medical specialist based on your health needs.",
  },
  {
    question: "Can I consult a doctor online?",
    answer:
      "Yes. PH Doc allows you to book online consultations with verified doctors and receive digital prescriptions securely.",
  },
  {
    question: "Are the doctors on PH Doc verified?",
    answer:
      "Absolutely. All doctors on PH Doc go through a verification process to ensure professional credentials and experience.",
  },
  {
    question: "Is my medical data safe?",
    answer:
      "Yes. We use secure systems and follow strict data protection practices to keep your personal and medical information private.",
  },
  {
    question: "What features are coming soon?",
    answer:
      "Upcoming features include online medicine ordering, diagnostic services, healthcare NGO directories, and home sample collection.",
  },
];
