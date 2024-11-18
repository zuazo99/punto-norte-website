
import type {Event} from "~/types.ts";
import {format} from "@formkit/tempo";
export default function FutureEventCard({event}: {event: Event}) {
    return (
        <a href={`events/${event.sys.id}`} className="group">
            <div
                className="flex h-full min-w-60 flex-1 flex-col gap-4 rounded-lg shadow-xl bg-[#1a1a1a] hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="relative flex aspect-[3/4] w-full rounded-xl bg-cover bg-center bg-no-repeat"
                     style={{backgroundImage: `url(${event.image.url})`}}>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
                </div>
                <div className="px-4 pb-4">
                    <p className="font-semibold text-base text-white font-brush group-hover:text-orange-400 transition-colors">{event.name}</p>
                    <p className="font-normal text-sm text-orange-500">
                        {format(event.date, 'dddd D | HH:mm', 'es')}
                    </p>
                    <div className="flex items-center mt-2 gap-2 text-gray-300 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.5.5v13m0-13l9 4.5l-9 4.5"/>
                        </svg>
                        <p className="font-light">{'Ubicación: Portugalete'}</p>
                    </div>
                    <div className="flex items-center mt-2 gap-2 text-gray-300 text-sm">
                        <p className="font-light">
                            Precio: {event.price ? `€${event.price}` : 'Gratis'}
                        </p>
                    </div>
                </div>
            </div>
        </a>

    )
}


