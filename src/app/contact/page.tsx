'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schéma de validation Zod pour le formulaire
const schema = z.object({
  name: z.string().min(2, { message: 'Nom requis' }),
  email: z.string().email({ message: 'Email invalide' }),
  message: z.string().min(10, { message: 'Message trop court' }),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Ajoute ici la logique de traitement du formulaire
    reset();
  };

  return (
      <section className="container mx-auto p-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Contactez-nous</h1>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
                id="name"
                type="text"
                {...register('name')}
                className={`w-full p-2 mt-1 border rounded-md ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full p-2 mt-1 border rounded-md ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
                id="message"
                {...register('message')}
                className={`w-full p-2 mt-1 border rounded-md ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={4}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </section>
  );
}
