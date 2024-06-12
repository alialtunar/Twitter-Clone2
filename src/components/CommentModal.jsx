"use client"
import { useRecoilState } from "recoil"
import { modalState } from "@/atom/modalAtom"
const CommentModal = () => {
    const [open,setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Comment Moodal</h1>

      {
        open && <h1>The modal is open</h1>
      }
    </div>
  )
}

export default CommentModal
