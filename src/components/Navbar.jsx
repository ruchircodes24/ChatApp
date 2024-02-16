import { Disclosure, Menu, Transition } from '@headlessui/react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import googleIcon from '../assets/icons/google.png'
import Logo from '../assets/icons/Logo.png'
import { useState } from 'react'

// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]

const title = {name: 'ChatChit', href: '#', current:true} 

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const [user] = useAuthState(auth)
    const signIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    const signOut = () => auth.signOut()
    return (
        <Disclosure as="nav" className="bg-black border-b-2 border-purple-500">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-5">
                        <div className="relative flex h-16 items-center justify-between">
                            
                            <div className="flex flex-1 items-center justify-left sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center pl-3">
                                    <img
                                        className="h-10 w-auto"
                                        src={Logo}
                                        alt="Logo"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 font-kanit">
                                            <a
                                                key={title.name}
                                                href={title.href}
                                                className={classNames(
                                                    title.current ?'text-white text-2xl' : 'text-gray-300',
                                                    'rounded-md text-sm font-medium'
                                                )}
                                                aria-current={title.current ? 'page' : undefined}
                                            >
                                                {title.name}
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {!user ? (<button
                                    type="button"
                                    className="flex items-center gap-2 relative rounded-full  px-3 py-2 text-gray-400 font-semibold hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 signIn"
                                    onClick={signIn}
                                >
                                    <img src={googleIcon} alt="Sign in with Google" className='w-4' />
                                    Sign in
                                </button>) :
                                    (<button
                                        type="button"
                                        className="flex items-center gap-2 relative rounded-full bg-gray-600 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 signOut"
                                        onClick={signOut}
                                    >
                                        Sign Out
                                    </button>)}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                                <Disclosure.Button
                                    key={title.name}
                                    as="a"
                                    href={title.href}
                                    className={classNames(
                                        title.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={title.current ? 'page' : undefined}
                                >
                                    {title.name}
                                </Disclosure.Button>
                            
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
