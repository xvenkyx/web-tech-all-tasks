import React from "react";

export default function TableOne() {
  return (
    <div>
      <p>
        <a href="/index.html">Back</a>
      </p>
      <div className="max-w-sm items-center flex justify-center rounded shadow-lg">
        <div className="font-bold text-3xl">College Time Table</div>
      </div>
      <table>
        {/* <colgroup>
          <col style="background-color: gray" />
          <col span="4" style="background-color: lightcyan" />
          <col />
          <col span="3" style="background-color: lightcyan" />
        </colgroup> */}
        <tr>
          <th></th>
          <th>8:30-9:30</th>
          <th>9:30-10:30</th>
          <th>10:30-11:30</th>
          <th>11:30-12:30</th>
          <th>12:30-2:00</th>
          <th>2:00-3:00</th>
          <th>3:00-4:00</th>
          <th>4:00-5:00</th>
        </tr>
        <tr>
          <th>MONDAY</th>
          <td>---</td>
          <td id="red">SUB1</td>
          <td>SUB2</td>
          <td>SUB3</td>
          <td rowspan="6">LUNCH</td>
          <td>SUB4</td>
          <td>SUB5</td>
          <td>COUNSELLING CLASS</td>
        </tr>
        <tr>
          <th>TUESDAY</th>
          <td id="red">SUB1</td>
          <td>SUB2</td>
          <td>SUB3</td>
          <td>---</td>
          <td>SUB2</td>
          <td>SUB2</td>
          <td>LIIBRARY</td>
        </tr>
        <tr>
          <th>WEDNESDAY</th>
          <td id="red">SUB1</td>
          <td>SUB2</td>
          <td>SWA</td>
          <td>---</td>
          <td colspan="3">LAB</td>
        </tr>
        <tr>
          <th>THURSDAY</th>
          <td id="red">SUB1</td>
          <td>SUB2</td>
          <td>SUB3</td>
          <td>---</td>
          <td>SUB2</td>
          <td>SUB2</td>
          <td>LIBRARY</td>
        </tr>
        <tr>
          <th>FRIDAY</th>
          <td id="red">SUB1</td>
          <td>SUB2</td>
          <td>SUB3</td>
          <td>---</td>
          <td>SUB4</td>
          <td>SUB5</td>
          <td>LIBRARY</td>
        </tr>
        <tr>
          <th>SATURDAY</th>
          <td>SUB1</td>
          <td colspan="3">SEMINAR</td>
          <td>SUB4</td>
          <td>SUB5</td>
          <td>LIBRARY</td>
        </tr>
      </table>
    </div>
  );
}
