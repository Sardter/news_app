import Link from "next/link";

interface AuthorProps {
    authorName: string;
    authorId: number;
}

function AuthorInfo({authorName, authorId}: AuthorProps) {
    return (
        <Link href="#"> {/* TODO: make author clickable */}
        <h6 className="card-subtitle mb-2 text-muted">
            {authorName}
        </h6>
        </Link>
    );
}

export {
    AuthorInfo
}

export type {
    AuthorProps
}