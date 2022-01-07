import Button from "/components/utils/Button";

export default function Pitch() {
    return (
        <div className="font-iextrabold w-full lg:w-9/12 xl:9/12 text-white">
            <h2 className="text-4xl font-bold">
                We gather speakers, attract parterns and give our imagination wings, all for this to be your favorite week.
            </h2>
            <div className="mt-8 w-56">
                <a href="/team">
                    <Button text="MEET THE TEAM" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
                </a>
            </div>
        </div>
    );
}