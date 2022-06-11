export const modalWrapper = props => {
    return [
        {
            classes: 'fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-secondary bg-opacity-75',
            styles: '',
            on: true, // default
        }
    ]
}

export const modal = props => {
    return [
        {
            classes: 'max-h-fit max-w-fit flex-1 overflow-hidden rounded-3xl bg-neutral-light p-12 text-secondary md:max-w-xl md:rounded-[50px] md:p-20',
            styles: '',
            on: true, // default
        }
    ]
}