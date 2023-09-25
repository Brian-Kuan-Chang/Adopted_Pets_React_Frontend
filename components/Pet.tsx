import Link from "next/link";
import Image from "next/image";
type Petprops = {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
};

const Pet = (props: Petprops) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <div>
      <Link href={`/details/${id}`}>
        <div>
          <img src={hero} alt={name} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Pet;
