import ContactModal from '../components/ContactModal';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 ">
      <div className="h-4"></div>
      <h1 className="text-4xl font-bold text-center">{t("actionBtn")}</h1>
      <p className="text-center text-lg max-w-2xl mx-auto">
        ¿Tienes dudas sobre nuestras sesiones? ¿Quieres reservar una evaluación? Estamos aquí para ayudarte.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Información de contacto</h2>
          <p className="flex items-center gap-2"><Phone size={20} /> <a href="tel:+34696869949">+34 696 869 949</a></p>
          <p className="flex items-center gap-2"><Mail size={20} /> <a href="mailto:info@centroentrenadores.com">cieptis.atencion@gmail.com</a></p>
          <p className="flex items-center gap-2"><MapPin size={20} /> Barcelona y alrededores</p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.facebook.com/profile.php?id=61574773471202" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          </div>

          <div className="pt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137434.9187140469!2d1.9753744158169482!3d41.392807953184146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e1!3m2!1sen!2ses!4v1747233916939!5m2!1sen!2ses"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-2xl shadow"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ContactModal isOpen={true} onClose={false} sectionId="contact-page" />
        </div>
      </div>


    </div>
  );
}
