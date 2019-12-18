export const runScript = async (url: string) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript: HTMLScriptElement = document.getElementsByTagName('script')[0];
        if (!!firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        }
    });
};

export const matchingPathname = (paths: string[]) => (loc: Location) => paths.some(path => loc.pathname === path);
