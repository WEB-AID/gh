export default function isActivePath(path, pathname) {
    const localePrefixes = ['/ru', '/en']
    const normalizePath = (p) => p.replace(/\/$/, '')

    if (path === '/') {
        return (
            pathname === '/' ||
            localePrefixes.some((prefix) => pathname === prefix)
        )
    }

    if (!localePrefixes.some((prefix) => pathname.startsWith(prefix))) {
        return pathname === path
    }

    return localePrefixes.some((prefix) =>
        normalizePath(pathname).startsWith(normalizePath(`${prefix}${path}`))
    )
}
