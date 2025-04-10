
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BottelareWebsite = () => {
    return (
        <div className="min-h-screen bg-green-100 text-green-800 p-6">
            <header className="text-center mb-8">
                <img src="/images/kerktoren.png" alt="Kerktoren Bottelare" className="mx-auto mb-4 w-32 h-32" />
                <h1 className="text-4xl font-bold">Welkom in Bottelare</h1>
                <p className="text-lg">Een blik op ons dorp, ons leven en onze gemeenschap</p>
            </header>

            <aside className="w-1/4 bg-green-200 p-4 rounded-md">
                <nav className="flex flex-col justify-start space-y-2">
                    {['Cultuur', 'Verenigingsleven', 'Happenings/Events/Kalender', 'Nieuws/Nieuwtjes', 'Handelszaken', 'Natuur/Wandelingen', 'Geschiedenis', 'Trage Wegen/Ketskes', 'Contact'].map((item) => (
                        <Button key={item} className="text-xl bg-green-300 text-green-900 rounded-lg shadow-md p-2 hover:bg-green-400 transition duration-200">{item}</Button>
                    ))}
                </nav>
            </aside>

            <main className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-4">
                <Card className="p-4">
                    <CardContent>
                        <h2 className="text-2xl font-semibold">Over Bottelare</h2>
                        <p>Ontdek de charme van ons dorp met zijn landelijke karakter en rijke geschiedenis.</p>
                    </CardContent>
                </Card>

                <Card className="p-4">
                    <CardContent>
                        <h2 className="text-2xl font-semibold">Contact</h2>
                        <Input placeholder="Naam" className="mb-2" />
                        <Input placeholder="E-mail" className="mb-2" />
                        <Textarea placeholder="Bericht" className="mb-2" />
                        <Button onClick={() => window.location.href = `mailto:dominiquevercammen1@gmail.com?subject=Contact%20van%20Bottelare%20Website&body=Naam: %0D%0AE-mail: %0D%0ABericht: `}>Verstuur</Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default BottelareWebsite;
