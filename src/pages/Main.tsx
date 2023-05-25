import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className="flex" style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <button>
          <Link to="/drive">Simpan Arsip di Google Drive </Link>
        </button>
        <button>
          <Link to="/storage">Simpan Arsip di Firebase Storage</Link>
        </button>
      </div>
    </>
  )
}

export default Main