const Overlay = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="fixed inset-0 bg-white opacity-90 z-10"
            onClick={onClick}
        />
    )
}

export default Overlay
