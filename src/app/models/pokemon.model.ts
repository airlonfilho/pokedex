export class Pokemon {
  weight: number;
  height: number;
  forms: forms;
  stats: stats;
  types: types;
  sprites: sprites;
  id: number;
  name: string;
}

interface types {
  type: {
    name: string
  }
}

interface forms {
  name: string;
}

interface stats {
  base_stat: number;
  stat: {
    name: string,
  }
}

interface sprites {
  back_default: string;
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    }
  }
}

