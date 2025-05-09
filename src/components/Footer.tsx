
import { ArrowUp } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="inline-block mb-6">
              <img 
                src="https://i.ibb.co/zWs1Bhn1/logo-03-3-removebg-preview.webp"
                alt="Cape Town Logo"
                className="h-16"
              />
            </a>
            <p className="text-sm text-white/70 mb-6">
              O primeiro edifício em Balneário Camboriú projetado pelo renomado 
              arquiteto Jayme Bernardo, inspirado na elegância da icônica praia 
              sul-africana.
            </p>
            <div className="flex space-x-4">
              <a href={getWhatsAppLink()} className="text-white/70 hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={getWhatsAppLink()} className="text-white/70 hover:text-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-gold transition-colors">Início</a></li>
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">Sobre</a></li>
              <li><a href="#features" className="text-white/70 hover:text-gold transition-colors">Diferenciais</a></li>
              <li><a href="#implementation" className="text-white/70 hover:text-gold transition-colors">Implantação</a></li>
              <li><a href="#leisure" className="text-white/70 hover:text-gold transition-colors">Lazer</a></li>
              <li><a href="#location" className="text-white/70 hover:text-gold transition-colors">Localização</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-gold transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-3 text-white/70">
              <li>(47) 3514-8544</li>
              <li>(47) 99242-1044 (WhatsApp)</li>
              <li>contato@a10.com.br</li>
              <li>R. 3110, N° 377 - sala 2 - Centro, Balneário Camboriú - SC, 88330-287</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Incorporação</h3>
            <div className="flex flex-col space-y-4">
              <div className="bg-white/10 p-4 rounded-sm w-40 h-20 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/hJ0k1YRj/290022244-552984213221934-7854402405974812143-n-removebg-preview.png" 
                  alt="R21 Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10 p-4 rounded-sm w-40 h-20 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/SDjR1fRj/babb9f11cf69dd1b8799259b-removebg-preview.png" 
                  alt="A10 Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Projeto arquitetônico: Jayme Bernardo e Zermiani Schafer
            </p>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Cape Town Balneário Camboriú. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center text-white/50 hover:text-gold transition-colors"
          >
            <span className="mr-2">Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
