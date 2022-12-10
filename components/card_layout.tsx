

interface CardProps {
    children: React.ReactNode;
    nonBodyChildren: React.ReactNode | null;
}

const style = {
    backgroundColor: "#343a40",
    color: "white",
    margin: "10px",
    borderRadius: "10px"
};

export default function Card({children, nonBodyChildren}: CardProps) {
    return (
        <div className="card" style={style}>
            {nonBodyChildren}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}