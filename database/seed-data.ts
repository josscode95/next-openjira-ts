
interface SeedData {
  entries:SeedEntry[]
}

interface SeedEntry {
  description:string;
  status:string;
  createdAt:number
}

export const seedData:SeedData = {
  entries: [
    {
      description: 'Pending: Amet dolor incididunt veniam elit cupidatat labore exercitation mollit elit consectetur.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'In-Progress: Nisi excepteur veniam occaecat tempor deserunt occaecat deserunt magna quis.',
      status: 'in-progress',
      createdAt: Date.now() - 100000
    },
    {
      description: 'Finished: Fugiat cupidatat ipsum aliquip laboris nisi.',
      status: 'finished',
      createdAt: Date.now() - 10000000
    }
  ]
}