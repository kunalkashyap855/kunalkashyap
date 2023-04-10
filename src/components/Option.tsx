function AboutOption({ selected, title, onClick }: { selected: boolean; title: string; onClick: (e: any) => void }) {
    return (
      <div 
        className={
            (selected ? "bg-blue-500 text-gray-50" : "text-gray-900") 
            + " font-semibold text-center p-3 rounded-xl text-xl laptop:mb-4"
        }
        onClick={onClick}
      >
        {title}
      </div>
    )
  }
  
  export default AboutOption