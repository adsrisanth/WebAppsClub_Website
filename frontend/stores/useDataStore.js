import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useDataStore = defineStore('data-store', () => {
  const teamData = [
    {
      year: 2024,
      data: [
        {
          committee: 'Executive',
          members: [
            {
              name: 'S.Mahidhar',
              email: '2000030587@kluniversity.in',
              linkedin: '',
              image:
                'https://plus.unsplash.com/premium_photo-1708274927154-db28fd6adaa8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
              name: 'Daniel',
              email: '2100520179@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Broadcasting',
          members: [
            {
              name: ' Vinesh K',
              email: '2301510096@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'K Gnanesh',
              email: '2100560026@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Himanth',
              email: '2200032412@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Hemanth',
              email: '2000031505@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Campus Relations',
          members: [
            {
              name: 'Ganesh Oruganti',
              email: '2100080076@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Jallu Navyatha',
              email: '2100032263@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Ziya Afreen',
              email: '2100090133@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Creative Arts',
          members: [
            {
              name: 'Anil',
              email: '2100030465@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Trinadh',
              email: '2100031203@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Designing',
          members: [
            {
              name: 'D.Jaswanth',
              email: '2100030119@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Drafting',
          members: [
            {
              name: 'Joan Sarah Aji',
              email: '2100010005@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Events',
          members: [
            {
              name: 'G Sri Veditha',
              email: '2100032182@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Hospitality',
          members: [
            {
              name: 'M.Varshitha',
              email: '2100032203@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Balaram',
              email: '2100080081@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'HR & Communications',
          members: [
            {
              name: 'Y. Chaitanya',
              email: '2200520053@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Logistics',
          members: [
            {
              name: 'S.Sujith Reddy',
              email: '2000031959@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Charishma',
              email: '2100560537@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'PR & Marketing',
          members: [
            {
              name: 'Dhanush Surya Deva Reddy',
              email: '2000031864@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'S.Manaswini',
              email: '2100080128@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'M.Abhinay Kowshik',
              email: '2100031985@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Protocol',
          members: [
            {
              name: 'M.Shweta',
              email: '2201600059@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'M Nithin',
              email: '2201510138@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'shanmukhi',
              email: '2200570015@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'M.Shweta',
              email: '2201600059@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'M Nithin',
              email: '2201510138@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'shanmukhi',
              email: '2200570015@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Registration & Certifications',
          members: [
            {
              name: 'Vidya',
              email: '2200031184@kluniversity.in',
              linkedin: '',
              image: ''
            },
            {
              name: 'Aravind T',
              email: '2200031596@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Sponsorship',
          members: [
            {
              name: 'Sriram Konda',
              email: '210155001@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Stage Management & Stalls',
          members: [
            {
              name: 'Lokesh',
              email: '2100030374@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Stage Management',
          members: [
            {
              name: 'Praharshini',
              email: '2100032062@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Treasurer',
          members: [
            {
              name: 'Viresh',
              email: '2100030003@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Transport',
          members: [
            {
              name: 'Nirajan',
              email: '2100090187@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Website',
          members: [
            {
              name: 'Dinesh',
              email: '2200031469@kluniversity.in',
              linkedin: 'https://www.linkedin.com/in/dinesh-srisanth-adari-860129249/',
              image: 'https://i.ibb.co/1MLDDBp/photo-2024-02-21-17-44-09.jpg'
            },
            {
              name: 'Nahfid',
              email: '2100032542@kluniversity.in',
              linkedin: 'https://www.linkedin.com/in/nahfid/',
              image: 'https://i.ibb.co/M5pfWq5/Nafi-kerela-1-min.jpg'
            }
          ]
        },
        {
          committee: 'Event Management',
          members: [
            {
              name: 'G.Krishna Vamsi',
              email: '2100030171@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Food and Beverages',
          members: [
            {
              name: 'Chandra Sekhar',
              email: '2100060029@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Volunteer Management',
          members: [
            {
              name: 'D.Sandeep',
              email: '2100030897@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Game Stall',
          members: [
            {
              name: 'Sai prakash raj',
              email: '2100030222@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Cleanliness & Waste Management',
          members: [
            {
              name: 'Syed Muskan',
              email: '2301510035@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Emergency Response',
          members: [
            {
              name: 'Noor Md',
              email: '2101570019@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Feedback Evaluation',
          members: [
            {
              name: 'Abhishek',
              email: '2100032180@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        },
        {
          committee: 'Post Event Documentation',
          members: [
            {
              name: 'Sharan',
              email: '2100520167@kluniversity.in',
              linkedin: '',
              image: ''
            }
          ]
        }
      ]
    }
  ]

  const activeCommittee = ref(teamData[0].data[0].committee)
  const activeCommitteeData = ref(teamData[0].data[0].members)

  return {
    teamData,
    activeCommittee , activeCommitteeData
  }
})
