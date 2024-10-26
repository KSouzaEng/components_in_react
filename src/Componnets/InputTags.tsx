import { useState } from "react";


function TagsInput(){
    const [tags, setTags] = useState([])
    const [tags2, setTags2] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }


    function removeTag(index){
        setTags(tags.filter((_el, i) => i !== index))
    }

    return (
        <>
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
        </div>
        <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type somthing" />


        </>
    )
}

export default TagsInput