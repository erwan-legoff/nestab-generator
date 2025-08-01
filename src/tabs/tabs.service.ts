import { Injectable } from '@nestjs/common';
import { CreateTabDto } from './dto/create-tab.dto';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpegeCompositor';
// import { UpdateTabDto } from './dto/update-tab.dto';

@Injectable()
export class TabsService {
  generate(createTabDto: CreateTabDto) {
    const compositor = new SimpleDownArpegeCompositor() 
    return compositor.getMusic();
  }

  // findAll() {
  //   return `This action returns all tabs`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tab`;
  // }

  // update(id: number, updateTabDto: UpdateTabDto) {
  //   return `This action updates a #${id} tab`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tab`;
  // }
}
