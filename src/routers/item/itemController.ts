import { Controller, Get, Response } from "@decorators/express";
import {
  Status,
  TypeItem,
  Damage,
  Durability,
  CreateEffect,
  Rare,
} from "../../";

@Controller("/item")
export class itemController {
  item: any;
  status: any;
  rareName: any;
  dmg: any;
  durabi: any;
  type: any;
  dura: any;
  effect: any;
  requirement: any;

  req: any;
  res: any;

  @Get("/")
  async create(@Response() res) {
    try {
      await this.callAllParams();
      await this._setItem();
      return this.salveItem(res);
    } catch (err) {
      res.send(err);
    }
  }
  private async salveItem(@Response() res) {
    try {
      if (this.item) {
        res.send(this.item);
      } else {
        res.send("Não foi possivel completar.");
      }
    } catch (err) {
      res.send(err.message);
    }
  }

  private async callAllParams() {
    const rarityObj = new Rare();
    const rare = await rarityObj.rareCreate();
    const rarityStatus = await rarityObj.rarityStatusMax(rare);
    this.rareName = await rarityObj.rarityName(rare);

    const damage = new Damage(rare);
    const status = new Status(rarityStatus);
    const durability = new Durability();
    const effect = new CreateEffect();
    const type = new TypeItem();

    this.status = await status.__status();
    this.dmg = await damage.damageCreate();
    this.durabi = await durability.durabilityCreate(rare);
    this.effect = await effect.createEffect(damage.multiDmg);
    this.type = await type.typeCreate();
  }
  private async _setItem() {
    return (this.item = {
      Type: this.type,
      Rarity: this.rareName,
      Durability: this.durabi,
      Damage: this.dmg,
      Status: this.status,
      Effect: this.effect,
      Reque: this.requirement,
    });
  }
}
