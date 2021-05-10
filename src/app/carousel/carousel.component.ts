import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MutantDescription } from '../mutant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  images:string[] =  ['assets/images/mutants/editado/slide/1.jpg','assets/images/mutants/editado/slide/2.jpg','assets/images/mutants/editado/slide/3.jpg','assets/images/mutants/editado/slide/4.jpg',
  'assets/images/mutants/editado/slide/5.jpg','assets/images/mutants/editado/slide/6.jpg','assets/images/mutants/editado/slide/7.jpg','assets/images/mutants/editado/slide/8.jpg','assets/images/mutants/editado/slide/9.jpg',
  'assets/images/mutants/editado/slide/10.jpg','assets/images/mutants/editado/slide/11.jpg','assets/images/mutants/editado/slide/12.jpg','assets/images/mutants/editado/slide/13.jpg',
  'assets/images/mutants/editado/slide/14.jpg','assets/images/mutants/editado/slide/15.jpg','assets/images/mutants/editado/slide/16.jpg','assets/images/mutants/editado/slide/17.jpg','assets/images/mutants/editado/slide/18.jpg'];


  slides:MutantDescription[] = [
    { id:1,
      name:'Azazel',
      power_category:'Transportation',
      description:'He is able to psionically transport himself, his clothing, and additional mass across inter-dimensional distances, making a "bamf" noise with each teleport. His power is so great that he is able to freeze people and objects in spacetime.',
      image:'assets/images/mutants/editado/slide/1.jpg',
    },
    { id:2,
      name:'Banshee',
      power_category:'Transportation',
      description:'By using a special designed suit combined with his powerful screams, Banshee is able to fly at subsonic speeds.',
      image:'assets/images/mutants/editado/slide/2.jpg',
    },
    { id:3,
      name:'Mystique',
      power_category:'Body Transformation',
      description:'The formation of her biological cells can be changed at will. As a result she can cause herself to look and sound like an exact duplicate of any human of either sex, wearing virtually any kind of clothing. ',
      image:'assets/images/mutants/editado/slide/3.jpg',
    },
    { id:4,
      name:'Colossus',
      power_category:'Body Transformation',
      description:'Can cover his entire body in an incredibly dense, organic metallic layer, which grants him incredible levels of physical strength and durability.',
      image:'assets/images/mutants/editado/slide/4.jpg',
    },
    { id:5,
      name:'Professor X',
      power_category:'Mental',
      description:'One of the most powerful telepaths, he can connect with others in many ways, reading and controlling minds, searching for memories, etc...',
      image:'assets/images/mutants/editado/slide/5.jpg',
    },
    { id:6,
      name:'Psylocke',
      power_category:'Mental',
      description:'She is able to manifest a variety of weapons from pure magenta psionic energy, which can physically affect the environment. Her weapons of choice resemble a katana, a chain sickle, a katari and an urumi.',
      image:'assets/images/mutants/editado/slide/6.jpg',
    },
    { id:7,
      name:'Marrow',
      power_category:'Bone Protusion',
      description:'Marrow has the ability to control the growth, shape and toughness of her bone structure.',
      image:'assets/images/mutants/editado/slide/7.jpg',
    },
    { id:8,
      name:'Sabretooth',
      power_category:'Bone Protusion',
      description:'He possesses razor sharp teeth, capable of ripping through flesh and bone. He is also able to grow out his fingernails that are capable of cutting through wood and metal.',
      image:'assets/images/mutants/editado/slide/8.jpg',
    },
    { id:9,
      name:'Toad',
      power_category:'Unique Physiology',
      description:'He has an elastic tongue that can stretch up to at least 13 feet. This combined with his ability to spit slime makes him a feared opponent.',
      image:'assets/images/mutants/editado/slide/9.jpg',
    },
    { id:10,
      name:'Angel',
      power_category:'Unique Physiology',
      description:'Angel has a unique body structure with functional wings dwelling from it, he is able to fly with no effort.',
      image:'assets/images/mutants/editado/slide/10.gif',
    },
    { id:11,
      name:'Shaw',
      power_category:'Energy Manipulation',
      description:'He is able to absorb energy in all its forms, proportionality augmenting all his physically parameters until finally metabolizing it, the absorbed energy also keeps him forever young.',
      image:'assets/images/mutants/editado/slide/11.jpg',
    },
    { id:12,
      name:'Cyclops',
      power_category:'Energy Manipulation',
      description:'Cyclops has the ability to release powerful energy blasts from his eyes. However, these blasts are uncontrollable and continuous. He wears special glasses designed to contain and control these blasts.',
      image:'assets/images/mutants/editado/slide/12.jpg',
    },
    { id:13,
      name:'Rogue',
      power_category:'Contact Based',
      description:'Rogue has the ability to absorb the life-force energy, personality, and memories of any person she touches. If this contact is maintained for long enough the target could die. She can also absorb the power from other mutants.',
      image:'assets/images/mutants/editado/slide/13.jpg',
    },
    { id:14,
      name:'Shadowcat',
      power_category:'Contact Based',
      description:'She possesses the ability to pass through any matter, known as "phasing", by passing her atoms through the spaces between the atoms of the object of which she is moving through.',
      image:'assets/images/mutants/editado/slide/14.jpg',
    },
    { id:15,
      name:'Iceman',
      power_category:'Elemental Abilities',
      description:' Iceman possesses the ability to manipulate and generate both cold and ice from his body. He can freeze enemies and throw ice-like projectiles at them, for example',
      image:'assets/images/mutants/editado/slide/15.jpg',
    },
    { id:16,
      name:'Pyro',
      power_category:'Elemental Abilities',
      description:'Pyro has the ability to manipulate fire. His ability initially is very powerful, enabling him to cause explosions of flames from only a small lighter.',
      image:'assets/images/mutants/editado/slide/16.jpg',
    },
    { id:17,
      name:'Wolverine',
      power_category:'Superhuman Attributes',
      description:'Wolverine has many human natural attributes augmented, he is super strong, his body heals at a much faster rate, is able to adapt to extreme weather conditions and many more.',
      image:'assets/images/mutants/editado/slide/17.jpg',
    },
    { id:18,
      name:'Beast',
      power_category:'Superhuman Attributes',
      description:'Beast naturally always had some degree of augmented attributes, after an incident in the lab some of these attributes rose even higher, he has super-agility, speed, strength, etc...',
      image:'assets/images/mutants/editado/slide/18.jpg',
    },
  ]
}