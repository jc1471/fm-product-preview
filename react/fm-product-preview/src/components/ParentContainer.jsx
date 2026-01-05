import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";

export default function ParentContainer() {
    return (
        <div className="parent-container">
            <ImageSection />
            <InfoSection />
        </div>
    )
}