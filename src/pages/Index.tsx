
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-stone-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Три мушкетера</h1>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-4 py-2 text-sm hover:bg-stone-700 rounded-md transition-colors"
                  href="#about"
                >
                  О романе
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-4 py-2 text-sm hover:bg-stone-700 rounded-md transition-colors"
                  href="#characters"
                >
                  О героях
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className="px-4 py-2 text-sm hover:bg-stone-700 rounded-md transition-colors"
                  href="#author"
                >
                  Об авторе
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-1 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Три мушкетера</h1>
          <p className="text-xl md:text-2xl mb-8">Один за всех и все за одного!</p>
          <a href="#about" className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md transition-colors">
            Узнать больше
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">О романе</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Старинная книга" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                «Три мушкетёра» — историко-приключенческий роман Александра Дюма-отца, впервые опубликованный в 1844 году. Повествует о приключениях молодого гасконца д'Артаньяна, отправившегося в Париж, чтобы стать мушкетёром, и трёх его друзей-мушкетёров Атоса, Портоса и Арамиса.
              </p>
              <p className="text-lg mb-4">
                Действие романа происходит во Франции и Англии в 1625—1628 годах. Роман насыщен историческими событиями и персонажами, но Дюма вольно обращается с историей, изменяя возраст героев и сочиняя события, которых никогда не было.
              </p>
              <p className="text-lg">
                Роман стал первой частью трилогии, в которую также входят «Двадцать лет спустя» и «Виконт де Бражелон, или Десять лет спустя».
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Characters Section */}
      <section id="characters" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">О героях</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* D'Artagnan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/709088b3-6a6e-433d-bd6b-42b63c46eee0.jpg" 
                alt="Д'Артаньян" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Д'Артаньян</h3>
                <p className="text-gray-700">Молодой гасконец, прибывший в Париж с рекомендательным письмом к капитану королевских мушкетеров. Храбрый, сообразительный и амбициозный юноша.</p>
              </div>
            </div>
            {/* Athos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/1105bf41-3090-4706-8ee9-11c980ae2293.jpg" 
                alt="Атос" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Атос</h3>
                <p className="text-gray-700">Благородный мушкетер, скрывающий тайну своего аристократического происхождения. Отличается умом, благородством и сдержанностью.</p>
              </div>
            </div>
            {/* Porthos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/1bde6df5-10f0-41d7-81da-f149cb78c101.png" 
                alt="Портос" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Портос</h3>
                <p className="text-gray-700">Самый сильный из мушкетеров, любитель роскоши и хвастун. Несмотря на внешнюю простоту, обладает добрым сердцем и предан друзьям.</p>
              </div>
            </div>
            {/* Aramis */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://cdn.poehali.dev/files/b26534b9-0c32-4eb9-989d-8b02cd664ef4.jpg" 
                alt="Арамис" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Арамис</h3>
                <p className="text-gray-700">Бывший аббат, ставший мушкетером. Утонченный и образованный, большой любитель женщин и интриг, мечтающий вернуться к духовной карьере.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Author Section */}
      <section id="author" className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">Об авторе</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://cdn.poehali.dev/files/225830f5-4520-43af-8dd9-3f842aa155e8.jpg" 
                alt="Александр Дюма" 
                className="rounded-lg shadow-xl mx-auto w-full h-auto max-w-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Александр Дюма (1802-1870)</h3>
              <p className="text-lg mb-4">
                Александр Дюма — французский писатель, драматург и журналист, творчество которого является одним из самых ярких представителей романтизма во французской литературе. Романы Дюма переведены на множество языков и экранизированы по всему миру.
              </p>
              <p className="text-lg mb-4">
                Помимо «Трех мушкетеров», перу Дюма принадлежат такие известные произведения, как «Граф Монте-Кристо», «Королева Марго», «Черный тюльпан» и многие другие. Его романы отличаются захватывающим сюжетом, яркими персонажами и тщательно проработанной исторической канвой.
              </p>
              <p className="text-lg">
                Дюма отличался необычайной работоспособностью — он написал более 300 произведений, многие из которых были созданы в сотрудничестве с другими авторами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Три мушкетера</p>
          <p className="text-stone-400">Один за всех и все за одного!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
