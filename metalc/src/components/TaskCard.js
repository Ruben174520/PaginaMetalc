import { useRouter } from "next/navigation";
export const TaskCard = ({ t }) => {
    const router = useRouter()

  return (
    <div style={{background:"#202020", color:"white"}}
        onClick={() => router.push(`/edit/${t.id}`)}     
    >
      <h1>{t.title}</h1>
      <button>Delete</button>
      <p>{t.description}</p>
    </div>
  );
};
